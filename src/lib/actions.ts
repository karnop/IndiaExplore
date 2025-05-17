"use server"
import prisma from '@/lib/prisma'
import type {Order} from "@/app/generated/prisma";

interface AcceptResult {
    success: boolean;
    message?: string;
}


export interface PaginatedResult<T> {
    items: T[]
    total: number
}

// upcoming appointments (today & future)
export async function getUpcomingOrders(
    userId: string,
    page = 1,
    limit = 5
): Promise<PaginatedResult<Order>> {
    const now = new Date()
    const skip = (page - 1) * limit

    const [items, total] = await Promise.all([
        prisma.order.findMany({
            where: { userId, date: { gte: now } },
            orderBy: { date: 'asc' },
            skip,
            take: limit,
        }),
        prisma.order.count({
            where: { userId, date: { gte: now } },
        }),
    ])

    return { items, total }
}

// past appointments (before today)
export async function getPastOrders(
    userId: string,
    page = 1,
    limit = 5
): Promise<PaginatedResult<Order>> {
    const now = new Date()
    const skip = (page - 1) * limit

    const [items, total] = await Promise.all([
        prisma.order.findMany({
            where: { userId, date: { lt: now } },
            orderBy: { date: 'desc' },
            skip,
            take: limit,
        }),
        prisma.order.count({
            where: { userId, date: { lt: now } },
        }),
    ])

    return { items, total }
}


export async function getOrders(userId: string) {

    return prisma.order.findMany({
        where: { userId },
        orderBy: { date: 'desc' },
    })
}

export async function getOrdersAdvocate(userId: string, page = 1, limit = 5) {
    const skip = (page - 1) * limit;

    const [orders, total] = await Promise.all([
        prisma.order.findMany({
            where: { advocateID: userId },
            orderBy: { date: 'desc' },
            skip,
            take: limit,
        }),
        prisma.order.count({
            where: { advocateID: userId },
        }),
    ]);

    return { orders, total };
}


export async function getOrdersAdvocate2(page = 1, limit = 5) {
    const skip = (page - 1) * limit;

    const [orders, total] = await Promise.all([
        prisma.order.findMany({
            where: { advocateAssigned: false },
            orderBy: { date: 'desc' },
            skip,
            take: limit,
        }),
        prisma.order.count({
            where: { advocateAssigned: false },
        }),
    ]);

    return { orders, total };
}

export async function advocateAcceptAppointment(args: {
    orderId: string;
    advocateId: string;
    advocateName: string;
}): Promise<AcceptResult>
{
    const { orderId, advocateId, advocateName } = args;

    // 1️⃣ count how many future appointments this advocate already has
    const now = new Date();
    const bookedCount = await prisma.order.count({
        where: {
            advocateID: advocateId,
            advocateAssigned: true,
            date: { gte: now },             // only future (or today) slots
        },
    });

    if (bookedCount >= 1) {
        return {
            success: false,
            message: 'You may accept at most 3 upcoming appointments.',
        };
    }

    // 2️⃣ assign this order to the advocate
    await prisma.order.update({
        where: { id: orderId },
        data: {
            advocateID: advocateId,
            advocateName,
            advocateAssigned: true,
        },
    });

    return { success: true };
}


export async function getOrder(orderId : string) {
    const order = await prisma.order.findUnique({
        where : {id : orderId },
    });

    return order;
}
