import React from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";


// const styles = {
//     card: {

//         display: 'flex',
//         justifyContent: 'flex-end',
//         background: 'transparent',

//     }
// };


function NavTabs() {
return (
  <Navbar class="transparent no-shadows">
        <Container id="AppNavbar-navbar" fluid>
          <Navbar.Brand className="align-text-bottom justify-content-center" as={Link} to="/">
            <span class="brand-logo center black-text"> Matt Weichel's Portfolio </span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar">
            <Nav className="ml-auto align-text-bottom">
                  <Nav.Link as={Link} to="/">
                    About Me
                  </Nav.Link>
                  <Nav.Link as={Link} to="/Resume">
                    Resume
                  </Nav.Link>
                  <Nav.Link as={Link} to="/Projects">
                    Projects
                  </Nav.Link>
                  <Nav.Link as={Link} to="/Contact">
                    Contact
                  </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    // <ul className="nav nav-tabs" styles={styles.card}>
    //   <h5>Matt Weichel's Portfolio </h5>
    //   <li className="nav-item">
    //     <a
    //       href="#about"
    //       onClick={() => handlePageChange('About')}
    //       // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
    //       className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
    //     >
    //       About Me
    //     </a>
    //   </li>
    //   <li className="nav-item">
    //     <a
    //       href="#home"
    //       onClick={() => handlePageChange('Resume')}
    //       // This is a conditional (ternary) operator that checks to see if the current page is "Home"
    //       // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
    //       className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
    //     >
    //       Resume
    //     </a>
    //   </li>
    //   <li className="nav-item">
    //     <a
    //       href="#projects"
    //       onClick={() => handlePageChange('Projects')}
    //       // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
    //       className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
    //     >
    //       Portfolio
    //     </a>
    //   </li>
    //   <li className="nav-item">
    //     <a
    //       href="#contact"
    //       onClick={() => handlePageChange('Contact')}
    //       // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
    //       className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
    //     >
    //       Contact
    //     </a>
    //   </li>
    // </ul>
  );
}


export default NavTabs;