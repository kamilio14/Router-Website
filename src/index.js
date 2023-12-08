import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Vans/Home";
import About from "./pages/Vans/About";
import Vans from "./pages/Vans/Vans";
import "./server";
import VanDetail from "./pages/Vans/VanDetail";
import Layout from "./components/Layout";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostLayouts from "./pages/Host/HostLayouts";
import Dashboard from "./pages/Host/Dashboard";
import HostVans from "./pages/Host/HostVans";
import HostVansDetail from "./pages/Host/HostVansDetail";
import Photos from "./pages/Host/Photos";
import Pricing from "./pages/Host/Pricing";
import FinalDetail from "./pages/Host/FinalDetail";
function App() {
  return (
    <BrowserRouter>
      <div className="all-card">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
            <Route path="/vans/:id" element={<VanDetail />} />
            {/* <Route path="/host" element={<Dashboard />} /> */}

            <Route path="host" element={<HostLayouts />}>
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVansDetail />}>
                <Route index element={<FinalDetail />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="photos" element={<Photos />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
