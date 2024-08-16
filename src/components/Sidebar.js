import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Nav className="flex-column">
        <Nav.Link as={Link} to="/dashboard" className="nav-item">
          <FaHome className="nav-icon" /> Dashboard
        </Nav.Link>
        <Nav.Link as={Link} to="/messages" className="nav-item">
          <FaUser className="nav-icon" /> Messages
        </Nav.Link>
        <Nav.Link as={Link} to="/tasks" className="nav-item">
          <FaCog className="nav-icon" /> Tasks
        </Nav.Link>
        <Nav.Link as={Link} to="/profile" className="nav-item">
          <FaUser className="nav-icon" /> Profile
        </Nav.Link>
        
      </Nav>
    </div>
  );
};

export default Sidebar;


