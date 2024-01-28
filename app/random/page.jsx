import React from "react";

async function fetchData() {
  let data = await fetch("http://localhost:3000/api/users");
  data = await data.json();
  return data;
}

export default async function Random() {
  console.log(process.env.INI_ENV);

  let { users } = await fetchData();

  return (
    <div>
      <h1>Fetching USERS</h1>
      {users?.map((user, index) => (
        <div key={index}>
          <p className="text-sm text-slate-500">{user.name}</p>
        </div>
      ))}
    </div>
  );
}
