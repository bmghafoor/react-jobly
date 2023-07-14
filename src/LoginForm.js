import React from "react";
import useFields from "./hooks/useFields";
import "./Form.css";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ login }) => {
  const navigate = useNavigate();
  const [formData, handleChange, resetForm] = useFields({
    username: "",
    password: "",
  });
  async function handleSubmit(e) {
    e.preventDefault();
    let result = await login(formData);
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
