import React, { useContext } from 'react';
import { Context } from '..';
import { useNavigate } from 'react-router-dom';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import { ADMIN_ROUTE, AUDIENCE_ROUTE, LOGIN_ROUTE, PLANS_ROUTE, TEACHER_ROUTE, WORKS_ROUTE } from '../utils/consts';

const NavBar = () => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    return (
        <>
      <Navbar bg="primary" variant="outline-dark">
        <Container>
          <Container className="d-flex">
            <LinkContainer to={TEACHER_ROUTE}>
              <Nav.Link>TEACHER</Nav.Link>
            </LinkContainer>
            <LinkContainer to={AUDIENCE_ROUTE}>
              <Nav.Link className="ms-3">AUDIENCE</Nav.Link>
            </LinkContainer>
            <LinkContainer to={WORKS_ROUTE}>
              <Nav.Link className="ms-3">WORKS</Nav.Link>
            </LinkContainer>
            <LinkContainer to={PLANS_ROUTE}>
              <Nav.Link className="ms-3">STUDY PLANS</Nav.Link>
            </LinkContainer>
          </Container>
          {user.isAuth ? (
            <Nav>
              <Button className="me-2" variant="outline-dark" onClick={() => navigate(ADMIN_ROUTE)}>Admin</Button>
              <Button variant="outline-dark" onClick={() => navigate(LOGIN_ROUTE)}>Выйти</Button>
            </Nav>
          ) : (
            <Nav>
              <Button
                variant="outline-dark"
                
              >
                Авторизация
              </Button>
            </Nav>
          )}
        </Container>
      </Navbar>
    </>
    );
};

export default NavBar;