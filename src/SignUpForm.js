import React from "react";
import useFields from "./hooks/useFields";
import { useNavigate } from "react-router-dom";
import "./Form.css";

const SignUpForm = ({ signup }) => {
  const navigate = useNavigate();
  const [formData, handleChange, resetForm] = useFields({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  async function handleSubmit(e) {
    e.preventDefault();
    let result = await signup(formData);
    if (result.success) {
      navigate("/");
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />
      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />
      <label htmlFor="email">email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <button className="btn">Signup</button>
    </form>
  );
};

export default SignUpForm;
