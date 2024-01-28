"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Layout({ children }) {
  const pathName = usePathname();

  return (
    <div>
      <ul className="bg-slate-200 p-5">
        <li className={pathName === "/" ? "bg-red-200 p-2" : ""}>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link
            className={pathName === "/elementalist" ? "bg-red-200 p-2" : ""}
            href={"/elementalist"}
          >
            All
          </Link>
        </li>
        <li>
          <Link
            className={
              pathName === "/elementalist/fire" ? "bg-red-200 p-2" : ""
            }
            href={"/elementalist/fire"}
          >
            Fire
          </Link>
        </li>
        <li>
          <Link
            className={
              pathName === "/elementalist/water" ? "bg-red-200 p-2" : ""
            }
            href={"/elementalist/water"}
          >
            Water
          </Link>
        </li>
      </ul>
      {children}
    </div>
  );
}
