'use client'

import { useState, useEffect } from 'react'

interface LocationOption { name: string; slug: string }

export default function AddLocationPage() {
    const [formData, setFormData] = useState({ name: '', slug: '', type: 'STATE', description: '', parentStateSlug: '', parentCitySlug: '' })
    const [states, setStates] = useState<LocationOption[]>([])
    const [cities, setCities] = useState<LocationOption[]>([])
    const [message, setMessage] = useState('')

    useEffect(() => {
        fetch('/api/location?type=STATE')
            .then(res => res.json())
            .then((data: LocationOption[]) => setStates(data))
            .catch(() => setStates([]))
    }, [])

    useEffect(() => {
        if (formData.parentStateSlug) {
            fetch(`/api/location?type=CITY&stateSlug=${formData.parentStateSlug}`)
                .then(res => res.json())
                .then((data: LocationOption[]) => setCities(data))
                .catch(() => setCities([]))
        } else {
            setCities([])
            setFormData(fd => ({ ...fd, parentCitySlug: '' }))
        }
    }, [formData.parentStateSlug])

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        const res = await fetch('/api/location', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) })
        const data = await res.json()
        setMessage(res.ok ? 'Location added successfully.' : data.error || 'Error occurred')
    }

    return (
        <main className="max-w-xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Add Location</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" placeholder="Name" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} required className="w-full border px-3 py-2" />
                <input type="text" placeholder="Slug (e.g., mumbai)" value={formData.slug} onChange={e => setFormData({ ...formData, slug: e.target.value })} required className="w-full border px-3 py-2" />
                <select value={formData.type} onChange={e => setFormData({ ...formData, type: e.target.value, parentStateSlug: '', parentCitySlug: '' })} className="w-full border px-3 py-2">
                    <option value="STATE">State</option>
                    <option value="CITY">City</option>
                    <option value="PLACE">Place</option>
                </select>

                {formData.type !== 'STATE' && (
                    states.length > 0 ? (
                        <> <label className="block mb-1">Select State</label>
                            <input list="state-options" placeholder="Search or choose state" value={formData.parentStateSlug} onChange={e => setFormData({ ...formData, parentStateSlug: e.target.value })} required className="w-full border px-3 py-2" />
                            <datalist id="state-options">{states.map(s => <option key={s.slug} value={s.slug}>{s.name}</option>)}</datalist>
                        </>
                    ) : <p className="text-gray-500">No states available yet.</p>
                )}

                {formData.type === 'PLACE' && (
                    cities.length > 0 ? (
                        <> <label className="block mb-1">Select City</label>
                            <input list="city-options" placeholder="Search or choose city" value={formData.parentCitySlug} onChange={e => setFormData({ ...formData, parentCitySlug: e.target.value })} required className="w-full border px-3 py-2" />
                            <datalist id="city-options">{cities.map(c => <option key={c.slug} value={c.slug}>{c.name}</option>)}</datalist>
                        </>
                    ) : <p className="text-gray-500">No cities available for this state.</p>
                )}

                <textarea placeholder="Description (optional)" value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} className="w-full border px-3 py-2" />

                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add Location</button>
                {message && <p className="text-sm mt-2 text-green-700">{message}</p>}
            </form>
        </main>
    )
}
