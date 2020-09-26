import React from "react";
import "./NavBar.css";
import { Form } from "react-bootstrap";
import logo from "../../Images/logo.png";
const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="brand-icon">
        <img src={logo} alt="Brand-logo" />
      </div>
      <div className="nav-items">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              style={{ color: "grey", borderRadius: 15, fontSize: 16 }}
              type="text"
              placeholder="Search Movies"
            />
          </Form.Group>
        </Form>
        <div className="lang-selection">EN</div>
        <div className="nav-buttons">
          <div className="login">Log In</div>
          <div className="try-now">Try Now</div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
