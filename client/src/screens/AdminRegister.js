import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { registerAdmin } from "../actions/user_action"; // Ensure this path is correct
import { Link } from "react-router-dom";
import './AdminRegister.css';

const AdminRegister = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    roll_no: Yup.string().required("Employee Id is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  const handleSubmit = (values) => {
    dispatch(registerAdmin(values));
  };

  return (
    <div className="register_container">
      <h3>Admin Registration</h3>
      <Formik
        initialValues={{ roll_no: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label>Employee Id</label>
            <Field
              type="text"
              name="roll_no"
              className="form-control"
              style={{ height: "60px", borderRadius: "20px" }}
            />
            <ErrorMessage name="roll_no" component="div" />
          </div>
          <div>
            <label>Password</label>
            <Field
              type="password"
              name="password"
              className="form-control"
              style={{ height: "60px", borderRadius: "20px" }}
            />
            <ErrorMessage name="password" component="div" />
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              height: "60px",
              color: "white",
              borderRadius: "20px",
              backgroundColor: "red",
            }}
          >
            Register
          </button>
        </Form>
      </Formik>
      <br />
      <Link 
    to="/AdminLogin" 
    style={{ fontFamily: "sans-serif", color: "white", textDecoration: "none" }}
>
    Go To Login page
</Link>
<Link 
    to="/" 
    style={{ fontFamily: "sans-serif", color: "white", textDecoration: "none" }}
>
    Go To Home
</Link>

    </div>
  );
};

export default AdminRegister;
