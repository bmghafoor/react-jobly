import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Navbar";
import Home from "./Home";
import CompaniesList from "./CompaniesList";
import JobsList from "./JobsList";
import JoblyApi from "./api";
import CompanyCard from "./CompanyCard";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";

function App() {
  const [companies, setCompanies] = useState([]);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function getCompanies() {
      let res = await JoblyApi.getCompanies();
      setCompanies(res.companies);
    }
    getCompanies();
  }, []);

  useEffect(() => {
    async function getJobs() {
      let res = await JoblyApi.getJobs();
      setJobs(res.jobs);
    }
    getJobs();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/companies"
            element={<CompaniesList companyList={companies} />}
          />
          <Route path="/companies/:handle" element={<CompanyCard />} />
          <Route path="/jobs" element={<JobsList jobList={jobs} />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
