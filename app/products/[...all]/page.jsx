"use client";

import React from "react";

export default function Project({params}) {
  console.log(params);

  return (
    <div>
      <h1>Project {params.all}</h1>
      <br />
      All Routes
      {params.all.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </div>
  );
}
