import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import "./RegistrationCard.css";

// Define validation schema using zod
const schema = z.object({
  firstName: z.string().min(2, "First Name must be at least 2 characters"),
  surname: z.string().min(2, "Surname must be at least 2 characters"),
  sex: z.enum(["Male", "Female", "Other"], {
    message: "Select a valid gender",
  }),
  dob: z.string().min(1, "Date of Birth is required"),
  church: z.string().min(2, "Church Name is required"),
  district: z.string().min(2, "District is required"),
  federation: z.string().min(2, "Federation is required"),
  status: z.enum(["Adventist", "Pre-Advent"], { message: "Select a status" }),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .optional(), // Optional phone number
});

const RegistrationCard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data) => {
    const formattedData = {
      first_name: data.firstName,
      surname: data.surname,
      sex: data.sex,
      dob: data.dob,
      church: data.church,
      district: data.district,
      federation: data.federation,
      status: data.status,
      email: data.email,
      phone: data.phone,
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/register/",
        formattedData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      alert("Registration successful!");
      reset();
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
      alert(
        error.response?.data?.message ||
          "An error occurred during registration."
      );
    }
  };

  return (
    <div className="registration-card">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* First Name Field */}
        <div className="form-group">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            {...register("firstName")}
            className="form-control"
          />
          {errors.firstName && (
            <p className="error">{errors.firstName.message}</p>
          )}
        </div>

        {/* Surname Field */}
        <div className="form-group">
          <label htmlFor="surname" className="form-label">
            Surname
          </label>
          <input
            type="text"
            id="surname"
            {...register("surname")}
            className="form-control"
          />
          {errors.surname && <p className="error">{errors.surname.message}</p>}
        </div>

        {/* Sex Field */}
        <div className="form-group">
          <label htmlFor="sex" className="form-label">
            Sex
          </label>
          <select id="sex" {...register("sex")} className="form-control">
            <option value="">Select...</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.sex && <p className="error">{errors.sex.message}</p>}
        </div>

        {/* Date of Birth Field */}
        <div className="form-group">
          <label htmlFor="dob" className="form-label">
            Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            {...register("dob")}
            className="form-control"
          />
          {errors.dob && <p className="error">{errors.dob.message}</p>}
        </div>

        {/* Church Field */}
        <div className="form-group">
          <label htmlFor="church" className="form-label">
            Name of Church
          </label>
          <input
            type="text"
            id="church"
            {...register("church")}
            className="form-control"
          />
          {errors.church && <p className="error">{errors.church.message}</p>}
        </div>

        {/* District Field */}
        <div className="form-group">
          <label htmlFor="district" className="form-label">
            District
          </label>
          <input
            type="text"
            id="district"
            {...register("district")}
            className="form-control"
          />
          {errors.district && (
            <p className="error">{errors.district.message}</p>
          )}
        </div>

        {/* Federation Field */}
        <div className="form-group">
          <label htmlFor="federation" className="form-label">
            Federation
          </label>
          <input
            type="text"
            id="federation"
            {...register("federation")}
            className="form-control"
          />
          {errors.federation && (
            <p className="error">{errors.federation.message}</p>
          )}
        </div>

        {/* Status Field */}
        <div className="form-group">
          <label htmlFor="status" className="form-label">
            Adventist / Pre-Advent
          </label>
          <select id="status" {...register("status")} className="form-control">
            <option value="">Select...</option>
            <option value="Adventist">Adventist</option>
            <option value="Pre-Advent">Pre-Advent</option>
          </select>
          {errors.status && <p className="error">{errors.status.message}</p>}
        </div>

        {/* Email Field */}
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className="form-control"
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        {/* Phone Field */}
        <div className="form-group">
          <label htmlFor="phone" className="form-label">
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            {...register("phone")}
            className="form-control"
          />
          {errors.phone && <p className="error">{errors.phone.message}</p>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn-submit" disabled={isSubmitting}>
          {isSubmitting ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default RegistrationCard;
