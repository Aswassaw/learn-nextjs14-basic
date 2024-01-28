import React from "react";

async function fetchData() {
  let data = await fetch("https://jsonplaceholder.typicode.com/posts");
  data = await data.json();
  return data;
}

export default async function FetchingServer() {
  let products = await fetchData();
  console.log(products);

  return (
    <div>
      <h1>Fetching Server</h1>
      {products?.map((product, index) => (
        <div key={index}>
          <p className="text-sm text-slate-500">{product.title}</p>
        </div>
      ))}
    </div>
  );
}
