import React from 'react'
import {Navbar, Nav, NavDropdown, FormControl, Form, Button} from '../node_modules/react-bootstrap'

class TopBar extends React.Component {
    render() {
      return (
      <div> 
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About Me</Nav.Link>
          <NavDropdown title="Recipes" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Kimchi Jjigae</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Kimchi Fried Rice</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.3">How to Make Kimchi At Home</NavDropdown.Item>
          </NavDropdown>
        </Nav>
       
      </Navbar.Collapse>
    </Navbar>
    </div> 
      )
    }
  }

  export default TopBar