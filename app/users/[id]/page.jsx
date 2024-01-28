import React from "react";

export default function UserDetailPage({ params }) {
  return (
    <div>
      <h1>User Detail Page</h1>
      <p>{params.id}</p>
    </div>
  );
}
