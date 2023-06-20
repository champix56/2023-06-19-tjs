import React from "react";
import PropTypes from "prop-types";
import styles from "./Navbar.module.css";
import {Navbar as NavBar, Container, Nav} from 'react-bootstrap'
import '../../../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../../../node_modules/jquery/dist/jquery.js'
import '../../../../../node_modules/bootstrap/dist/js/bootstrap.js'
//import NavBar from 'react-bootstrap/Navbar'
/**
 * composant Navbar
 * @param {{}} props props du composant Navbar
 * @returns {React.ReactNode} rendu du composant Template
 */
const Navbar = (props) => {
  return (
    <div className={styles.Navbar} data-testid="Navbar">
       <NavBar bg="primary" data-bs-theme="dark">
        <Container>
          <NavBar.Brand href="#home">Navbar</NavBar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </NavBar>
    </div>
  );
};

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
