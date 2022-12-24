import { Link, useLocation } from "react-router-dom";
import React from "react";

export default function Header() {
  const location = useLocation();

  return (
    <div className="header">
      <h1 className="header-title">Belajar React Router DOM v6</h1>
      <nav className="header-nav">
        <Link
          to="/"
          className={
            location.pathname === "/" ? "header-link active" : "header-link"
          }
        >
          Home
        </Link>
        <Link
          to="contacts"
          className={
            location.pathname === "/contacts"
              ? "header-link active"
              : "header-link"
          }
        >
          Contacts
        </Link>
        <Link
          to="about"
          className={
            location.pathname === "/about"
              ? "header-link active"
              : "header-link"
          }
        >
          About
        </Link>
      </nav>
      <br></br>
    </div>
  );
}
