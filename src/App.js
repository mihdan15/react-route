import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.js";
import Contacts from "./pages/Contacts.js";
import About from "./pages/About.js";
import Error from "./pages/Error.js";
import ProjectDetail from "./pages/Project.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route>
        <Route path="/project/:id" element={<ProjectDetail />}></Route>
      </Route>
      <Route path="/contacts" element={<Contacts />}>
        <Route path=":username" element={<Contacts />}></Route>
      </Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
  );
}

export default App;
