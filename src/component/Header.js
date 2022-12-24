import { Link } from "react-router-dom";
import React from "react";

export default function Header() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Beljar React Router DOM v6</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="contacts">Contacts</Link> |{" "}
        <Link to="about">About</Link>
      </nav>
      <br></br>
      <hr></hr>
    </div>
  );
}
