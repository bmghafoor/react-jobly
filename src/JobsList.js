import React, { useContext, useState, useEffect } from "react";
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";
import UserContext from "./UserContext";
import { Navigate } from "react-router-dom";

function decToPer(dec) {
  const percentage = (dec * 100).toFixed(2);

  return `${percentage}%`;
}

const JobsList = ({ id, jobList }) => {
  const { currentUser, hasAppliedToJob, applyToJob } = useContext(UserContext);
  const [applied, setApplied] = useState(false);

  useEffect(() => {
    setApplied(hasAppliedToJob(id));
  }, [id, hasAppliedToJob]);

  async function handleApply() {
    if (hasAppliedToJob(id)) {
      applyToJob(id);
      setApplied(true);
    }
  }

  if (!currentUser) {
    return <Navigate to="/login" />;
  }
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
              {job.salary ? (
                <CardSubtitle>Salary: ${job.salary}</CardSubtitle>
              ) : (
                <CardSubtitle>No Salary</CardSubtitle>
              )}
              {job.equity > 0 ? (
                <CardSubtitle>Equity: {decToPer(job.equity)}</CardSubtitle>
              ) : (
                <CardSubtitle>No Equity</CardSubtitle>
              )}
              <button onClick={handleApply} disabled={applied}>
                {applied ? "Applied" : "Apply"}
              </button>
            </CardBody>
          </Card>
        ))}
      </div>
    </>
  );
};

export default JobsList;
