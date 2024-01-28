"use client";

import { useEffect, useState } from "react";

export default function FetchingPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let data = await fetch("https://jsonplaceholder.typicode.com/posts");
      data = await data.json();

      setProducts(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Fetching Gan</h1>
      {
        products.map((product, index) => (
          <div key={index}>
            <p className="text-sm text-slate-500">{product.title}</p>
          </div>
        ))
      }
    </div>
  );
}
