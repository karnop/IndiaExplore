// src/app/client/edit-profile/page.tsx

"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditProfile() {
  const { data: session } = useSession();
  const router = useRouter();

  const [name, setName] = useState(session?.user?.name || "");
  const [email, setEmail] = useState(session?.user?.email || "");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/profile", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    });

    const result = await res.json();
    setLoading(false);

    if (res.ok) {
      alert("Profile updated!");
      router.push("/profile"); // redirect back to profile
    } else {
      alert(result.error || "Update failed");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-10 flex flex-col gap-4"
    >
      <h1 className="text-xl font-bold">Edit Profile</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your Name"
        className="border p-2 rounded"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="border p-2 rounded"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-black text-white p-2 rounded"
      >
        {loading ? "Saving..." : "Save Changes"}
      </button>
    </form>
  );
}
