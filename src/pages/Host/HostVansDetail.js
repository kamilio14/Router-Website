import { useParams } from "react-router-dom";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function HostVansDetail() {
  const params = useParams();

  const [hostVans, setHostVans] = useState(null);

  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setHostVans(data));
  }, []);

  console.log("kundy", hostVans);

  return (
    <>
      {hostVans ? (
        <>
          <h1>{hostVans.vans.name}</h1>
          <img src={hostVans.vans.imageUrl} height="400px" />
        </>
      ) : (
        "Loading"
      )}

      <NavLink to=".." relative="path">
        Back to all wans
      </NavLink>
      <nav className="final-navbar">
        <NavLink
          to={`.`}
          end
          className={({ isActive }) => (isActive ? "finalNavLink" : "")}
        >
          FinalDetail
        </NavLink>
        <NavLink
          to="/host/vans/:id/pricing"
          className={({ isActive }) => (isActive ? "finalNavLink" : "")}
        >
          Pricing
        </NavLink>
        <NavLink
          to="/host/vans/:id/photos"
          className={({ isActive }) => (isActive ? "finalNavLink" : "")}
        >
          Photos
        </NavLink>
      </nav>
      {hostVans ? <Outlet context={hostVans} /> : "Loading"}
    </>
  );
}
