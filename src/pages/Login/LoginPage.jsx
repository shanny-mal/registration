import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./LoginPage.css";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Replace with your actual login API endpoint and logic
      const response = await axios.post(
        "http://127.0.0.1:8000/api/users/login/",
        data,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      // Save token and any admin flag in localStorage
      localStorage.setItem("authToken", response.data.token);
      localStorage.setItem("isAdmin", response.data.is_admin);
      alert("Login successful!");
      // Redirect based on role (e.g., to /admin or /user)
    } catch (error) {
      console.error(
        "Login error:",
        error.response ? error.response.data : error.message
      );
      alert("Login failed!");
    }
  };

  return (
    <div className="login-page-container">
      <Navbar />
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              {...register("email", { required: "Email is required" })}
              className="form-control"
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              {...register("password", { required: "Password is required" })}
              className="form-control"
            />
            {errors.password && (
              <p className="error">{errors.password.message}</p>
            )}
          </div>
          <button type="submit" className="btn-submit" disabled={isSubmitting}>
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
