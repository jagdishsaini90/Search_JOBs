import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

// Apply method for a job
const ApplyModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Apply
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Cover Letter</Form.Label>
              <Form.Control type="text" placeholder="cover letter" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Resume</Form.Label>
              <Form.Control type="file" placeholder="resume" required />
            </Form.Group>
            <Link style={{textDecoration:"none"}} to="/success">
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
