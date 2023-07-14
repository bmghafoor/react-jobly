import React, { useContext } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import UserContext from "./UserContext";

function NavBar({ logout }) {
  const { currentUser } = useContext(UserContext);

  function loggedIn() {
    return (
      <div>
        <Navbar expand="md">
          <NavLink exact to="/" className="navbar-brand">
            Jobly
          </NavLink>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to="/companies">Companies</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/jobs">Jobs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/login" onClick={logout}>
                Logout {currentUser.username}
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }

  function loggedOut() {
    return (
      <div>
        <Navbar expand="md">
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to="/signup">Signup</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/login">Login</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }

  return <nav>{currentUser ? loggedIn() : loggedOut()}</nav>;
}

export default NavBar;
