import React from "react";
import { useParams } from "react-router-dom";

export default function Contacts() {
  const params = useParams();

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Contacts {params.username}</h1>
    </div>
  );
}
