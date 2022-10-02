import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
function Header() {
  return (
    <header>
        <Navbar expand="lg" variant="light" bg="light">
            <Container>
                <LinkContainer to="/">
                <Navbar.Brand>React Django Azure </Navbar.Brand>
                </LinkContainer>
                <Nav className="mr-auto">
                    <LinkContainer to="/login">
                      <Nav.Link><i className='fas fa-user'></i>Login</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header
