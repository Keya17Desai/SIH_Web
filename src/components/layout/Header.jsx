import React from "react";
import "../../assets/style/header.css";
import { Link } from 'react-router-dom'; // If you're using React Router for navigation

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <h1 className="logo">
            <Link to="/">Yaandarshak</Link>
          </h1>
          <nav className="nav">
            <ul>
              <li>
                <Link to="./pages/Home">Home</Link>
              </li>
              <li>
                <Link to="./pages/Schedule">Schedule</Link>
              </li>
              <li>
                <Link to="./pages/Track">Track</Link>
              </li>
              <li>
                <Link to="./pages/Contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
