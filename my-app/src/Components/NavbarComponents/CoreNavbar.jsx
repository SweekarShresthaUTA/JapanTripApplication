import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

// Our Navbar component that takes in 3 default menu options, the titles of which can be passed in as props
// And a Default drop down menu with 3 items to show in those items, titles of which can also be passed in as props

// This component can be updated later to add > 3 default menus and > 3 number of drop down items in the drop down menu,
// It just needs updating the number of props sent through and the value for each

function CoreNavBar(props) {
  const {
    title,
    firstMenuTitle,
    secondMenuTitle,
    thirdMenuTitle,
    dropDownMenuTitle,
    firstDropDownMenuOption,
    secondDropDownMenuOption,
    thirdDropDownMenuOption,
  } = props;

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <img
          src="https://www.uta.edu/ucomm/identity/files/logo/UTA_A-logo_blue-orange-rgb.png"
          alt="UTA-Logo"
          height="20px"
        />
        <Navbar.Brand href="/">{title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Contacts">{firstMenuTitle}</Nav.Link>
            <Nav.Link href="/Schedule">{secondMenuTitle}</Nav.Link>
            <Nav.Link href="/CurrencyExchange">
              {thirdMenuTitle}
            </Nav.Link>
            <NavDropdown title={dropDownMenuTitle} id="basic-nav-dropdown">
              <NavDropdown.Item href="commonPhrases">
                {firstDropDownMenuOption}
              </NavDropdown.Item>
              <NavDropdown.Item href="landmarkLookup">
                {secondDropDownMenuOption}
              </NavDropdown.Item>
              <NavDropdown.Item href="culturalInformation">
                {thirdDropDownMenuOption}
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CoreNavBar;
