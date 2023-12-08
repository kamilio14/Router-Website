import { useOutletContext } from "react-router-dom";
export default function FinalDetail() {
  const hostVans = useOutletContext();
  console.log("kundičky", hostVans);
  return (
    <section className="final-detail">
      <h4>Name: {hostVans.vans.name}</h4>
      <h4>Category: {hostVans.vans.type}</h4>
      <h4>Description: {hostVans.vans.description}</h4>
      <h4>Visibility: public</h4>
    </section>
  );
}
