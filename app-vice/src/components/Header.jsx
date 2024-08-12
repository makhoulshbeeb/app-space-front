import React from 'react';
import './styles/Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-title">DashBoard</div>
            <input type="text" placeholder="Search here..." className="search-bar" />
            <div className="user-info">
                <img src="profile_picture_url" alt="Profile" className="profile-picture" />
                <span>Nabiha Khoury</span>
            </div>
        </header>
    );
};

export default Header;
