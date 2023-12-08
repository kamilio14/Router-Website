import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function HostLayouts() {
  return (
    <>
      <nav className="second-nav">
        <Link to="/host/income">Income</Link>
        <Link to="/host/reviews">Review</Link>
        <Link to="/host">Dashboard</Link>
        <Link to="/host/vans">Host</Link>
      </nav>
      <Outlet />
    </>
  );
}
