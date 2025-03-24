import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { AuthContext } from "../../components/context/AuthContext"; // Import AuthContext
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); // Use login function from AuthContext
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/users/login/",
        {
          username: data.email, // Use email as username
          password: data.password,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      // Use AuthContext to handle login state
      login(response.data.access, response.data.user.is_admin); // Call login from context

      alert("Login successful!");

      // Redirect based on role
      if (response.data.user.is_admin) {
        navigate("/admin");
      } else {
        navigate("/user");
      }
    } catch (error) {
      console.error(
        "Login error:",
        error.response ? error.response.data : error.message
      );
      alert("Login failed! Check credentials.");
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
