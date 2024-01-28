"use client";

import React from "react";

export default function Client() {
  console.log("Hello from the (client component)");

  return (
    <div>
      <h1>Client</h1>
      <button onClick={() => alert("Hello")}>Click Me</button>
    </div>
  );
}
