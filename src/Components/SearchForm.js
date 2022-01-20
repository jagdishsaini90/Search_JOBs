import React, { useState } from "react";
import { Form, Col, Row, Button, Container } from "react-bootstrap";
import Job from "./job";

const SearchForm = ({ fetchJobs, jobs, loading }) => {
  const [params, setParams] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetchJobs(params);
  };
  return (
    <>
      <Form className="mb-4 mt-5" onSubmit={handleSubmit}>
        <Row className="align-items-end">
          <Form.Group as={Col}>
            <Form.Label>Description</Form.Label>
            <Form.Control
              onChange={(e) => setParams(e.target.value)}
              value={params}
              name="description"
              type="text"
              placeholder="enter your programming language"
            />
          </Form.Group>
          <Button
            onClick={handleSubmit}
            variant="primary"
            style={{ maxWidth: "300px" }}
          >
            Search
          </Button>
        </Row>
      </Form>
      <Container>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          jobs && jobs.length > 0  ? jobs.map((job) => {
            return <Job job={job} key={job.id} />;  
          }) : <h1>Oops nothing is there!</h1>
        )}
      </Container>
    </>
  );
};

export default SearchForm;
