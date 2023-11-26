import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <div className="all-card">
        <nav className="nav-bar">
          <Link to="/">#VANLIFE</Link>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Van />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function Van() {
  return <h1>Here are the Vans</h1>;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
