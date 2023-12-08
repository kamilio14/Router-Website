import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav className="nav-bar">
        <Link to="/">#VANLIFE</Link>
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
        <Link to="/host">Host</Link>
      </nav>
    </>
  );
}
