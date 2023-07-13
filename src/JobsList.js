import React from "react";
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";

function decToPer(dec) {
  const percentage = (dec * 100).toFixed(2);

  return `${percentage}%`;
}

const JobsList = ({ jobList }) => {
  return (
    <>
      <h3>Here are the Jobs</h3>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {jobList.map((job) => (
          <Card
            style={{
              width: "20%",
              margin: "10px",
              border: "1px solid black",
              padding: "5px",
            }}
          >
            <CardBody>
              <CardTitle tag="h5">{job.companyName}</CardTitle>
              <CardText>{job.title}</CardText>
              <CardSubtitle>Salary: ${job.salary}</CardSubtitle>
              {job.equity > 0 ? (
                <CardSubtitle>Equity: {decToPer(job.equity)}</CardSubtitle>
              ) : null}
              <button>Apply</button>
            </CardBody>
          </Card>
        ))}
      </div>
    </>
  );
};

export default JobsList;
