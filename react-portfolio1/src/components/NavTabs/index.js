import {Container, Nav, Navbar } from 'react-bootstrap';
import React from 'react';


function NavTabs(props) {

        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                Hunter Johnson
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link onClick={() => props.handlePageChange('Home')} href="#home">Home</Nav.Link>
                    <Nav.Link onClick={() => props.handlePageChange('About')} href='#about'>About</Nav.Link>
                    <Nav.Link onClick={() => props.handlePageChange('Projects')} href='#projects'>Projects</Nav.Link>
                    <Nav.Link onClick={() => props.handlePageChange('Contact')} href='#contact'>Contact</Nav.Link>
                    <Nav.Link onClick={() => props.handlePageChange('Resume')} href='#resume'>Resume</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
}

export default NavTabs