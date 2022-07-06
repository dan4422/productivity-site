import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Navbar, Nav } from 'react-bootstrap'
import styles from './MainNavbar.module.css'


function MainNavbar() {
  return (
    <>
      <Container fluid>
        <Row>
          <Navbar.Brand className={`${styles.bgTopNav} text-center text-dark`} as={Link} to="/">To-Do It</Navbar.Brand>
        </Row>
      </Container>
      <Navbar className={styles.bgBottomNav} expand="lg" >
        <Container className='justify-content-center'>
          <Row className=''>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className='ms-5'>
                <Nav.Link className="me-5" as={Link} to="/">Home</Nav.Link>
                <Nav.Link className="me-5" as={Link} to="/todo">Todo</Nav.Link>
                <Nav.Link as={Link} to="/progress">View Progress</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Row>
        </Container>
      </Navbar>
    </>
  )
}

export default MainNavbar