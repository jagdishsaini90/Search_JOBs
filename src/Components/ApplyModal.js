import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

// Apply method for a job
const ApplyModal = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cover, setCover] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Apply
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Application form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Cover Letter</Form.Label>
              <Form.Control
                type="text"
                placeholder="cover letter"
                required
                value={cover}
                onChange={(e) => setCover(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Resume</Form.Label>
              <Form.Control type="file" placeholder="resume" required />
            </Form.Group>
            <Link
              style={{ textDecoration: "none" }}
              to={`/success/${name}/${email}/${cover}`}
            >
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Link>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ApplyModal;
