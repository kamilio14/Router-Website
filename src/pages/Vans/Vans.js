import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [vansData, setVansData] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVansData(data.vans));
  }, []);

  const elements = vansData.map((item) => (
    <Link key={item.id} to={`/vans/${item.id}`}>
      <div className="van-component">
        <img src={item.imageUrl} height="200px" width="200px" alt={item.name} />
        <h3>{item.name}</h3>
        <p>{item.price}$</p>
        <i className="type">{item.type}</i>
      </div>
    </Link>
  ));

  return <div className="all-components">{elements}</div>;
}
