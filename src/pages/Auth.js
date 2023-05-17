import React, { useContext, useState } from "react";
import { Container, Card, Form, Button, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { registration, login } from "../http/userAPI";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, TEACHER_ROUTE } from "../utils/consts";

const Auth = observer(() => {
  const {user} = useContext(Context)
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const click = async () => {
    try {
        let data;
        if (isLogin) {
            data = await login(email, password)
        } else {
            data = await registration(email, password)
        }
        user.setUser(data)
        user.setIsAuth(true)
        navigate(TEACHER_ROUTE )
    } catch (error) {
        alert(error.response.data.message)
    }
}


  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 500 }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Авторизація" : "Реєстрація"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control onChange={e => setEmail(e.target.value)} value={email}  className="mt-3" placeholder="Введіть вашу пошту" />
          <Form.Control onChange={e => setPassword(e.target.value)} value={password}  type="password"  className="mt-3" placeholder="Введіть ваш пароль" />
          <Form className="d-flex justify-content-between">
            {isLogin ? (
              <div>
                <LinkContainer to={REGISTRATION_ROUTE}>
                  <Nav.Link className="mt-3">
                    <Button variant="link">Реєстрація</Button>
                  </Nav.Link>
                </LinkContainer>
              </div>
            ) : (
              <div>
                <LinkContainer to={LOGIN_ROUTE}>
                  <Nav.Link className="mt-3">
                    <Button variant="link">Увійти</Button>
                  </Nav.Link>
                </LinkContainer>
              </div>
            )}
            <Button onClick={click} className="mt-2 align-self-end" variant="outline-success">
              {isLogin ? "Увійти" : "Зареєструватися"}
            </Button>{" "}
          </Form>
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;
