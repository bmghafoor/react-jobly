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
import jwt_decode from "jwt-decode";
import useLocalStorage from "./useLocalStorage";
import UserContext from "./UserContext";

function App() {
  const [companies, setCompanies] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage("jobly-token");
  const [applicationIds, setApplicationIds] = useState(new Set([]));

  // function to get all companies
  useEffect(() => {
    async function getCompanies() {
      let res = await JoblyApi.getCompanies();
      setCompanies(res.companies);
    }
    getCompanies();
  }, []);

  // function to get all jobs
  useEffect(() => {
    async function getJobs() {
      let res = await JoblyApi.getJobs();
      setJobs(res.jobs);
    }
    getJobs();
  }, []);

  // function to load current user
  useEffect(() => {
    async function getCurrentUser() {
      if (token) {
        let { username } = jwt_decode(token);
        JoblyApi.token = token;
        let currentUser = await JoblyApi.getCurrentUser(username);
        setCurrentUser(currentUser);
        setApplicationIds(new Set(currentUser.applications));
      }
    }
    getCurrentUser();
  }, [token]);

  async function signUp(data) {
    let token = await JoblyApi.signUp(data);
    setToken(token);
    return { success: true };
  }

  async function login(data) {
    let token = await JoblyApi.login(data);
    setToken(token);
    return { success: true };
  }

  function hasAppliedToJob(id) {
    return applicationIds.has(id);
  }

  function applyToJob(id) {
    if (hasAppliedToJob(id)) return;
    JoblyApi.applyToJob(currentUser.username, id);
    setApplicationIds(new Set([...applicationIds, id]));
  }

  function logout() {
    setCurrentUser(null);
    setToken(null);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider
          value={{ currentUser, hasAppliedToJob, applyToJob }}
        >
          <NavBar logout={logout} />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              path="/companies"
              element={<CompaniesList companyList={companies} />}
            />
            <Route path="/companies/:handle" element={<CompanyCard />} />
            <Route path="/jobs" element={<JobsList jobList={jobs} />} />
            <Route path="/signup" element={<SignUpForm signup={signUp} />} />
            <Route path="/login" element={<LoginForm login={login} />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
