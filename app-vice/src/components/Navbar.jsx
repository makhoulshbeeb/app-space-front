import "./styles/Navbar.css";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <ul className="nav-links">
          <img src="/AppLogo.svg" alt="App Logo" className="logo" />

          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/discover")}>Discover</li>
          <li onClick={() => navigate("/about_us")}>About Us</li>
          <li onClick={() => navigate("/contact_us")}>Contact Us</li>
        </ul>
        <div className="search-login-signup">
          <FaSearch className="search-icon" />
          <button className="signup-button" onClick={() => navigate("/signup")}>
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
