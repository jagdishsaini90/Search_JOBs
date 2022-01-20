import React from "react";
import { Card, Badge, Button } from "react-bootstrap";

export default function Job({ job }) {
  return (
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
            <Badge
              variant="secondary"
              className="mr-2"
              style={{ marginRight: "10px" }}
            >
              {job.category.label && job.category.label}
            </Badge>
            <Badge variant="secondary" style={{ marginRight: "10px" }}>
              {job.location.display_name && job.location.display_name}
            </Badge>
            <Badge variant="secondary">
              Max Salary {job.salary_max && job.salary_max}
            </Badge>
          </div>
        </div>
        <Card.Text>
          {/* Redirecting to actual job posted website */}
          <Button variant="primary" className="mt-3">
            <a
              href={job.redirect_url}
              style={{ color: "black", textDecoration: "none" }}
            >
              View Details
            </a>
          </Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
