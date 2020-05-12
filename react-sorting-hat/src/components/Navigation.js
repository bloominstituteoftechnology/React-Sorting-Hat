import React from 'react';
import { Link} from 'react-router-dom';
import { NavLink, NavbarBrand, Navbar, Nav } from 'reactstrap';

const Navigation = () => {
   
return(
  <div className="navigation">
    <Navbar>
      <NavbarBrand tag={Link} to="/" className="mr-auto">
      Hogwards houses
      </NavbarBrand>
           <Nav className='nav-links'>
          <NavLink tag={Link} to="/questions">Take the test</NavLink> 
          <NavLink tag={Link} to="/" >Home</NavLink>
          </Nav>
    </Navbar>
  </div>
)};
export default Navigation;