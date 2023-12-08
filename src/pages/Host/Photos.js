import { useOutletContext } from "react-router-dom";

export default function Photos() {
  const hostVans = useOutletContext();

  return <img src={hostVans.vans.imageUrl} width="150px" />;
}
