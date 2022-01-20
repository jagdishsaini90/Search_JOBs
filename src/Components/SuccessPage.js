import React from "react";
import { Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";

const SuccessPage = () => {
  const { name, email, coverletter } = useParams();
  return (
    <>
      <Alert key={0} variant="success" className="mt-5">
        <h1>You Application is submitted Successfully</h1>
      </Alert>
      <h3>Name : {name}</h3>
      <h3>Email : {email}</h3>
      <h3>Cover Letter : {coverletter}</h3>
    </>
  );
};

export default SuccessPage;
