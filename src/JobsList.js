import React from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

const JobsList = () => {
  return (
    <div>
      <h3>Here are the Jobs</h3>
      <Card
        style={{
          width: "20%",
          margin: "10px",
          border: "1px solid black",
          padding: "5px",
        }}
      >
        <CardBody>
          <CardTitle tag="h5">Company Name</CardTitle>
          <CardText>Job Title</CardText>
          <button>More Info</button>
        </CardBody>
      </Card>
    </div>
  );
};

export default JobsList;
