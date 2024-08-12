import "./styles/Navbar.css"
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        
        <ul className="nav-links">
        <div className="logo">
          <img src="/AppLogo.svg" alt="App Logo" />
        </div>
          <li>Home</li>
          <li>Discover</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
        <div className="search-login-signup">
          <FaSearch className="search-icon" />

          <button className="signup-button">Sign Up</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
