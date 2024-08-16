import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Nav className="flex-column">
        <Nav.Link as={Link} to="/home" className="nav-item">
          <FaHome className="nav-icon" /> Home
        </Nav.Link>
        <Nav.Link as={Link} to="/profile" className="nav-item">
          <FaUser className="nav-icon" /> Profile
        </Nav.Link>
        <Nav.Link as={Link} to="/settings" className="nav-item">
          <FaCog className="nav-icon" /> Settings
        </Nav.Link>
        <Nav.Link as={Link} to="/logout" className="nav-item">
          <FaSignOutAlt className="nav-icon" /> Logout
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;

