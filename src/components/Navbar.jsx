import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { BookOpen, Star } from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="nav-item">
          <BookOpen size={18} />
          <span>Home</span>
        </NavLink>

        <NavLink to="/favorites" className="nav-item">
          <Star size={18} />
          <span>Favorites</span>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
