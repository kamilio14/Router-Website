import React from "react";
import { useParams } from "react-router-dom";

export default function VanDetail() {
  const params = useParams();
  console.log("kundy", params);
  const [van, setVan] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((res) => setVan(res.vans))
      .catch((error) => console.error("Error fetching data:", error));
  }, [params.id]);

  return (
    <div className="van-details">
      {van ? (
        <>
          <h1>{van.name}</h1>
          <img src={van.imageUrl} alt={van.name} />
          <h2>${van.price}</h2>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
