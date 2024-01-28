import { redirect } from "next/navigation";
import React from "react";

export default function Privacy({ params }) {
  if (params.id !== "andry") {
    redirect("/");
  }

  return (
    <div>
      <h1>Privacy</h1>
    </div>
  );
}
