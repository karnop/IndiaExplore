import prisma  from '@/lib/prisma'
import { notFound } from 'next/navigation'
import Itenraryform from "@/components/itenraryform"
import TransportSection from "@/components/transportsection";
import { Key } from 'react';

interface PageProps {
    params: { address: string[] }
}

export default async function VisitPage({params}: PageProps) {
    const addressPath = params.address.join('/')
    const location = await prisma.location.findUnique({
        where: {address: addressPath},
        include: {
            BannerImages: true,
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

            {/* Banner Carousel (Custom JavaScript Version) */}
            {location.BannerImages?.length > 0 && (
                <div className="relative overflow-hidden">
                    <div className="carousel w-full relative">
                        {location.BannerImages.map((img: {
                            id: Key | null | undefined;
                            url: string | Blob | undefined;
                        }, index: number) => (
                            <div key={img.id} className={`carousel-item w-full ${index === 0 ? 'block' : 'hidden'}`}>
                                <img src={img.url} alt={location.name} className="w-full h-64 object-cover" />
                            </div>
                        ))}
                    </div>
                    <script dangerouslySetInnerHTML={{ __html: `
            (function() {
              const items = document.querySelectorAll('.carousel-item');
              let current = 0;
              setInterval(() => {
                items[current].classList.remove('block');
                items[current].classList.add('hidden');
                current = (current + 1) % items.length;
                items[current].classList.remove('hidden');
                items[current].classList.add('block');
              }, 3000);
            })();
          ` }} />
                </div>
            )}

            {/* Itinerary Section */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Create Your Itinerary</h2>
                <Itenraryform address={params.address} />
            </section>

            {/* Booking Section */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Book a Travel Package</h2>
                <p>Coming soon...</p>
            </section>

            {/* Transport Options */}
            <TransportSection address={params.address}  />

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