import { Link } from "react-router-dom";
import "../css/Navbar.css";

function NavBar() {
  // const handleRefresh = (path) => {
  //   window.location.href = path; // Forces a full-page reload
  // };
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">🎬 Movie App</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/favorites" className="nav-link">
          Favorites
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
