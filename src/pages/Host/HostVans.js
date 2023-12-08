import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function HostVans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const elements = vans.map((van) => {
    return (
      <Link to={`/host/vans/${van.id}`}>
        <h1>{van.name}</h1>
        <h2>{van.price}</h2>
        <img src={van.imageUrl} height="300px" />
      </Link>
    );
  });
  return elements;
}
