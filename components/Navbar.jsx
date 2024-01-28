import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex justify-around">
        <div>
          <h1 className="text-center">Logo</h1>
        </div>

        <div>
          <Link className="list-none no-underline m-[10px]" href={"/"}>
            Home
          </Link>
          <Link className="list-none no-underline m-[10px]" href={"/about"}>
            About
          </Link>
          <Link className="list-none no-underline m-[10px]" href={"/portfolio"}>
            Portfolio
          </Link>
        </div>
      </ul>
    </nav>
  );
}
