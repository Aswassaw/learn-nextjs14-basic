"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function Home() {
  const router = useRouter();

  return (
    <section>
      <h1 className="text-2xl">useRouter</h1>

      <button
        className="p-3 bg-red-400 m-4 text-white hover:bg-red-500"
        onClick={() => router.push("/about")}
      >
        Lihat About
      </button>
      <button
        className="p-3 bg-blue-400 m-4 text-white hover:bg-blue-500"
        onClick={() => router.push("/login")}
      >
        Login Now
      </button>
      <button
        className="p-3 bg-blue-400 m-4 text-white hover:bg-blue-500"
        onClick={() => router.push("/userlist")}
      >
        User List
      </button>
    </section>
  );
}
