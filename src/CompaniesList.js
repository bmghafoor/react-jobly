import React from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

const CompaniesList = () => {
  return (
    <div>
      <h3>Here are the companies</h3>
      <Card
        className="companyCard"
        style={{
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
          border: "1px solid black",
          padding: "5px",
        }}
      >
        <CardBody>
          <CardTitle tag="h5">Company Name</CardTitle>
          <CardText>Company Description</CardText>
          <button>More Info</button>
        </CardBody>
      </Card>
    </div>
  );
};

export default CompaniesList;
