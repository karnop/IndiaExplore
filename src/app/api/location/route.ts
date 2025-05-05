import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

enum LocationTypeEnum { STATE = 'STATE', CITY = 'CITY', PLACE = 'PLACE' }

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type') as LocationTypeEnum
    const stateSlug = searchParams.get('stateSlug')
    const citySlug = searchParams.get('citySlug')

    try {
        let locations = []

        if (type === LocationTypeEnum.STATE) {
            locations = await prisma.location.findMany({
                where: { type: 'STATE' },
                select: { name: true, slug: true },
            })
        } else if (type === LocationTypeEnum.CITY && stateSlug) {
            const state = await prisma.location.findUnique({ where: { slug: stateSlug } })
            if (!state) return NextResponse.json({ error: 'Invalid stateSlug' }, { status: 400 })
            locations = await prisma.location.findMany({
                where: { type: 'CITY', parentId: state.id },
                select: { name: true, slug: true },
            })
        } else if (type === LocationTypeEnum.PLACE && stateSlug && citySlug) {
            const state = await prisma.location.findUnique({ where: { slug: stateSlug } })
            if (!state) return NextResponse.json({ error: 'Invalid stateSlug' }, { status: 400 })
            const city = await prisma.location.findFirst({ where: { slug: citySlug, parentId: state.id } })
            if (!city) return NextResponse.json({ error: 'Invalid citySlug' }, { status: 400 })
            locations = await prisma.location.findMany({
                where: { type: 'PLACE', parentId: city.id },
                select: { name: true, slug: true },
            })
        } else {
            return NextResponse.json({ error: 'Invalid query parameters' }, { status: 400 })
        }

        return NextResponse.json(locations)
    } catch (e) {
        console.error(e)
        return NextResponse.json({ error: 'Server error' }, { status: 500 })
    }
}

interface CreateLocationDTO {
    name: string
    slug: string
    type: 'STATE' | 'CITY' | 'PLACE'
    description?: string
    parentStateSlug?: string
    parentCitySlug?: string
}

export async function POST(request: Request) {
    const { name, slug, type, description, parentStateSlug, parentCitySlug }: CreateLocationDTO = await request.json()
    let parentId: string | undefined
    let address: string

    try {
        if (type === 'STATE') {
            address = slug
        } else if (type === 'CITY') {
            if (!parentStateSlug) throw new Error('parentStateSlug is required for CITY')
            const parentState = await prisma.location.findUnique({ where: { slug: parentStateSlug } })
            if (!parentState) throw new Error('Invalid parentStateSlug')
            parentId = parentState.id
            address = `${parentState.slug}/${slug}`
        } else if (type === 'PLACE') {
            if (!parentStateSlug || !parentCitySlug) throw new Error('parentStateSlug and parentCitySlug are required for PLACE')
            const parentState = await prisma.location.findUnique({ where: { slug: parentStateSlug } })
            if (!parentState) throw new Error('Invalid parentStateSlug')
            const parentCity = await prisma.location.findFirst({ where: { slug: parentCitySlug, parentId: parentState.id } })
            if (!parentCity) throw new Error('Invalid parentCitySlug')
            parentId = parentCity.id
            address = `${parentState.slug}/${parentCity.slug}/${slug}`
        } else {
            throw new Error('Unknown location type')
        }

        const location = await prisma.location.create({
            data: { name, slug, type, description, parentId, address },
        })
        return NextResponse.json(location)
    } catch (e) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        return NextResponse.json({ error: e.message }, { status: 400 })
    }
}