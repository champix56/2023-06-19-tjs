import React from "react";
import PropTypes from "prop-types";
import styles from "./Navbar.module.css";
import {Navbar as NavBar, Container, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'
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
        <LinkContainer to="/"><NavBar.Brand href="#home">Home</NavBar.Brand></LinkContainer>
          <Nav className="me-auto">
          <LinkContainer to="/thumbnail"><Nav.Link href="#">Thumbnail</Nav.Link></LinkContainer>
          <LinkContainer to="/editor"><Nav.Link href="#">Editor</Nav.Link></LinkContainer>
          </Nav>
        </Container>
      </NavBar>
    </div>
  );
};

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
