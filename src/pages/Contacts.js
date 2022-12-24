import React from "react";
import { useParams } from "react-router-dom";

export default function Contacts() {
  const params = useParams();

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ height: "150px" }}></div>
      <h1 className="titlePage">Contacts {params.username}</h1>
    </div>
  );
}
