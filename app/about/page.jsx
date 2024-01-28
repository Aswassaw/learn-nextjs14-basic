"use client";

import { useSearchParams } from "next/navigation";
import React from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import WynnPhoto from "@/public/wynn.png";

const poppins = Poppins({ subsets: ["latin"], weight: "500" });

export default function AboutPage() {
  const searchParams = useSearchParams();

  console.log(searchParams.get("manusia"));

  return (
    <div>
      <h1 className={poppins.className}>About Page (Dengan Poppins)</h1>

      <Image src={WynnPhoto} width={200} height={200} alt="Dari Image Next" />

      <Image
        src={"https://avatars.githubusercontent.com/u/54055078?v=4"}
        width={200}
        height={200}
        alt="Dari Image Next"
      />

      <img
        src="https://avatars.githubusercontent.com/u/54055078?v=4"
        width={"200px"}
        height={"200px"}
        alt="Dari HTML Biasa"
      />
    </div>
  );
}
