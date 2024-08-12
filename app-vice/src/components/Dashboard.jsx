import React from 'react';
import './styles/Dashboard.css';
import Sidebar from './SideBar'
import Header from './Header';
import ProfileCard from './ProfileCard';
import PersonalDetails from './PersonalDetails';
import ContactInfo from './ContactInfo';
import BioSection from './BioSection';
import HelpSection from './HelpSection';

const Dashboard = () => {
    const user = {
        name: "Nabiha Khoury",
        firstName: "Nabiha",
        lastName: "Khoury",
        email: "Nabiha.kh@hotmail.com",
        postalCode: "53829",
        country: "Lebanon",
        city: "Beirut",
        dob: "23 January 1998",
        gender: "Male",
        bio: "Tech-savvy innovator with a passion for creating impactful mobile apps. I use the AI-driven platform to refine my ideas and bring them to market with confidence."
    };

    return (
        <div className="dashboard">
            <Sidebar />
            <Header />
            <div className="main-content">
                <ProfileCard user={user} />
                <div className="personal-info">
                    <PersonalDetails user={user} />
                    <ContactInfo user={user} />
                </div>
                <BioSection user={user} />
                <HelpSection />
            </div>
        </div>
    );
};

export default Dashboard;
