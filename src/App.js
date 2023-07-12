import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Navbar";
import Home from "./Home";
import CompaniesList from "./CompaniesList";
import JobsList from "./JobsList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/companies" element={<CompaniesList />} />
          <Route path="/jobs" element={<JobsList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
