import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./api";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";
import { NavLink } from "react-router-dom";
import "./CompaniesList.css";
import JobsList from "./JobsList";

const CompanyCard = () => {
  const [company, setCompany] = useState(null);
  const { handle } = useParams();

  useEffect(() => {
    async function getCompany() {
      setCompany(await JoblyApi.getCompany(handle));
    }
    getCompany();
  }, [handle]);

  // Incase data isn't ready
  if (!company) {
    return <div>Not ready</div>;
  }

  return (
    <div>
      <Card
        style={{
          width: "18rem",
        }}
      >
        <img alt="Sample" src={company.logoUrl} />
        <CardBody>
          <CardTitle tag="h5">{company.name}</CardTitle>
          <CardText>{company.description}</CardText>
        </CardBody>
      </Card>
      <JobsList jobList={company.jobs}></JobsList>
    </div>
  );
};

export default CompanyCard;
