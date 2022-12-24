// import React from "react";

// export default function Home() {
//   return (
//     <div style={{ textAlign: "center" }}>
//       <h1>Home</h1>
//     </div>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
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
  return (
    <div className="landing-page">
      <div className="landing-page-header">
        <h1>Welcome to Our Website!</h1>
      </div>
      <div className="landing-page-body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        {projects.map((project) => (
          <div key={project.id} className="project">
            <img
              src={project.imageUrl}
              alt={project.title}
              loading="lazy"
              width={400}
            />
            <h2>
              <Link to={`/project/${project.id}`}> {project.title}</Link>
            </h2>
            <p>{project.description}</p>
          </div>
        ))}
        <button className="landing-page-button">Learn More</button>
      </div>
    </div>
  );
}
