import React from 'react';
import { Link } from 'react-router-dom';
import './styles/SideBar.css';

const Sidebar = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      />
       <div className="sidebar">
      <div className="logo">
        <h1>AppVice</h1>
      </div>
      <ul className="nav-list">
        <li><Link to="/"><i className="fas fa-home"></i> Home</Link></li>
        <li><Link to="/profile"><i className="fas fa-user"></i> Profile</Link></li>
        <li><Link to="/discover"><i className="fas fa-th-large"></i> Discover</Link></li>
        <li><Link to="/favorites"><i className="fas fa-heart"></i> Favorites</Link></li>
        <li><Link to="/ai-insights"><i className="fas fa-chart-line"></i> Ai Insights</Link></li>
      </ul>
      <ul className="support-logout">
        <li><Link to="/support"><i className="fas fa-headset"></i> Support</Link></li>
        <li><Link to="/logout"><i className="fas fa-sign-out-alt"></i> Logout</Link></li>
      </ul>
    </div>
    </>
  );
};

export default Sidebar;
