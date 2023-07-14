import React, { useContext } from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";
import { NavLink, Navigate } from "react-router-dom";
import "./CompaniesList.css";
import UserContext from "./UserContext";

const CompaniesList = ({ companyList }) => {
  const { currentUser } = useContext(UserContext);

  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <h3>Here are the companies</h3>
      {companyList.map((company) => (
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
            <CardTitle tag="h5">{company.name}</CardTitle>
            <CardText>{company.description}</CardText>
            <NavLink
              className="button"
              exact
              to={`/companies/${company.handle}`}
            >
              More Info
            </NavLink>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default CompaniesList;
