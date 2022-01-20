import React from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  let local_email = localStorage.getItem("local_email");
  let local_name = localStorage.getItem("local_name");

  const handleLogout = () => {
    localStorage.removeItem("local_email");
    localStorage.removeItem("local_name");
    localStorage.removeItem("local_password");
    navigate("/login");
  };
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Search Jobs</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            {local_email ? (
              <>
                <Navbar.Text>
                  Signed in as: <a href="#login">{local_name}</a>
                </Navbar.Text>
                <Button
                  variant="primary"
                  onClick={handleLogout}
                  style={{ marginLeft: "20px" }}
                >
                  Logout
                </Button>
              </>
            ) : (
              ""
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Home;
