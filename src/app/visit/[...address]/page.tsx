import prisma from '@/lib/prisma'
import { notFound } from 'next/navigation'
import { Carousel } from '@nextui-org/react'
import ItineraryForm from '@/components/ItineraryForm'
import TransportSection from '@/components/TransportSection'

interface PageProps {
    params: { address: string[] }
}

export default async function VisitPage({ params }: PageProps) {
    const addressPath = params.address.join('/')
    const location = await prisma.location.findUnique({
        where: { address: addressPath },
        include: {
            bannerImages: true,
        }
    })
    if (!location) return notFound()

    return (
        <main className="mx-auto p-4 space-y-8">
            {/* Settings Button */}
            <div className="flex justify-end">
                <a href={`/visit/${addressPath}/settings`} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
                    Settings
                </a>
            </div>

            {/* Banner Carousel */}
            {location.bannerImages?.length > 0 && (
                <Carousel autoplay loop>
                    {location.bannerImages.map(img => (
                        <Carousel.Item key={img.id}>
                            <img src={img.url} alt={location.name} className="w-full h-64 object-cover" />
                        </Carousel.Item>
                    ))}
                </Carousel>
            )}

            {/* Itinerary Section */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Create Your Itinerary</h2>
                <ItineraryForm address={addressPath} />
            </section>

            {/* Booking Section */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Book a Travel Package</h2>
                <p>Coming soon...</p>
            </section>

            {/* Transport Options */}
            <TransportSection address={addressPath} />

            {/* Eats & Stays */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Best Places to Eat</h2>
                <p>Coming soon...</p>
            </section>
            <section>
                <h2 className="text-2xl font-semibold mb-4">Best Places to Stay</h2>
                <p>Coming soon...</p>
            </section>
        </main>
    )
}
