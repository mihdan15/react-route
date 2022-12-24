import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Project 1",
    description:
      "Ini adalah project pertama saya yang berisi aplikasi web e-commerce dengan React dan Node.js.",
    imageUrl:
      "https://images.unsplash.com/photo-1661961111184-11317b40adb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
  },
  {
    id: 2,
    title: "Project 2",
    description:
      "Ini adalah project kedua saya yang berisi aplikasi mobile untuk booking hotel dengan Flutter dan Firebase.",
    imageUrl:
      "https://images.unsplash.com/photo-1661961110372-8a7682543120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 3,
    title: "Project 3",
    description:
      "Ini adalah project ketiga saya yang berisi website portfolio dengan HTML, CSS, dan JavaScript.",
    imageUrl:
      "https://images.unsplash.com/photo-1661961110671-77b71b929d52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
];

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id == id);
  const navigate = useNavigate();
  return (
    <div className="project-detail">
      <h1>{project.title}</h1>
      <img
        src={project.imageUrl}
        alt={project.title}
        loading="lazy"
        width={500}
      />
      <p>{project.description}</p>
      <button onClick={() => navigate(-1)}>Kembali</button>
    </div>
  );
}
