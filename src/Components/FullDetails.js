import React from "react";
import { Card } from "react-bootstrap";
import ApplyModal from "./ApplyModal";

// Showing relevant details for the job
const FullDetails = ({ job }) => {

  return (
    <div>
      <Card className="mb-3">
        <Card.Body>
          <div className="d-flex justify-content-between">
            <div>
              <Card.Title>
                {job.title && job.title} -{" "}
                <span className="text-muted font-weight-light">
                  {job.company.display_name && job.company.display_name}
                </span>
              </Card.Title>
              <Card.Subtitle className="text-muted mb-2">
                {new Date(job.created && job.created).toLocaleDateString()}
              </Card.Subtitle>
            </div>
          </div>
          <Card.Text>
            <span style={{ color: "black", fontWeight: "bold" }}>
              Description :{" "}
            </span>
            {job.description}
          </Card.Text>
          <Card.Text>
            <span style={{ color: "black", fontWeight: "bold" }}>
              Contract Time :
            </span>
            {job.contract_time}
          </Card.Text>
          <Card.Text>
            <span style={{ color: "black", fontWeight: "bold" }}>
              Contract Type :
            </span>
            {job.contract_type}
          </Card.Text>
          <Card.Text>
            <span style={{ color: "black", fontWeight: "bold" }}>
              Max Salary :{" "}
            </span>
            {job.salary_max}
          </Card.Text>
          <Card.Text>
            <span style={{ color: "black", fontWeight: "bold" }}>
              Min Salary :{" "}
            </span>
            {job.salary_min}
          </Card.Text>
         <ApplyModal  />
          <a href={job.redirect_url}>Visit official job page</a>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FullDetails;
