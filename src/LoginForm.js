import React from "react";
import useFields from "./hooks/useFields";
import "./Form.css";

const LoginForm = () => {
  const [formData, handleChange, resetForm] = useFields({
    username: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    resetForm();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <button className="btn">Login</button>
    </form>
  );
};

export default LoginForm;
