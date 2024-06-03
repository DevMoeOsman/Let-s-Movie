// SideBar.js
import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link as={Link} to="/" className="text-white">
        All Genres
      </Nav.Link>
      <Nav.Link as={Link} to="/genre/comedy" className="text-white">
        Comedy
      </Nav.Link>
      <Nav.Link as={Link} to="/genre/drama" className="text-white">
        Drama
      </Nav.Link>
      <Nav.Link as={Link} to="/genre/action" className="text-white">
        Action
      </Nav.Link>
      {/* Add more genres as needed */}
    </Nav>
  );
};

export default SideBar;
