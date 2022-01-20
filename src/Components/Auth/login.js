import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useAuth } from "../../AuthProvider";
import { Link, useNavigate } from "react-router-dom";


// Login method
const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      return;
    }
    const res = login(email, password);
    if (res) {
      await navigate("/");
    } else {
      setResult("Unable to login");
    }
  };

  return (
    <Container className="mt-5 border">
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <Link to="/register">Register here!</Link>
      <p style={{ color: "red" }}>{result}</p>
    </Container>
  );
};

export default Login;
