import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages";
import { Home, About, Projects, Contact, Resume } from "../components";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Dashboard />}
          children={[
            <>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />
            </>,
          ]}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
