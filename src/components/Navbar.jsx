import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <nav>
      <ul>
        <li>
          {location.pathname !== "/" && (
            <button onClick={() => navigate(-1)}>Back</button>
          )}
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
