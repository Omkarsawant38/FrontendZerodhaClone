import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
  });

  const { name, username, email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSuccess = (msg) =>
    toast.success(msg, { position: "top-right" });

  const handleError = (msg) =>
    toast.error(msg, { position: "top-right" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("1. Submit button clicked. Form data:", inputValue); // DEBUG

    if (!name || !username || !email || !password) {
      handleError("Please fill all fields");
      return;
    }

    console.log("2. Form is valid. Sending request to backend..."); // DEBUG

    try {
      const { data } = await axios.post(
        "https://backendzerodha-3xet.onrender.com/signup",
        inputValue,
        { withCredentials: true }
      );
      
      console.log("3. Received response from backend:", data); // DEBUG

      const { success, message } = data;

      if (success) {
        handleSuccess(message);
        setInputValue({ name: "", username: "", email: "", password: "" });
        setTimeout(() => navigate("/login"), 1000);
      } else {
        handleError(message || "Signup failed");
      }
    } catch (error) {
      // This part is the most important for debugging
      console.error("4. An error occurred during the API call:", error); // DEBUG
      
      if (error.response) {
        // The request was made and the server responded with a non-2xx status code
        console.error("Server responded with an error:", error.response.data);
        handleError(error.response.data.message || "An error occurred on the server.");
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received from server:", error.request);
        handleError("Cannot connect to the server. Is it running?");
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error setting up the request:", error.message);
        handleError("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-7 p-5">
          <img src="/images/signup.png" alt="Signup" className="img-fluid" />
        </div>
        <div className="col-5 p-5">
          <h1 className="mb-4 mt-3">Signup Now</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-row align-items-center" style={{ width: "90%" }}>
              <div className="my-3">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Name"
                  value={name}
                  onChange={handleOnChange}
                />
              </div>

              <div className="my-3">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  id="username"
                  placeholder="Username"
                  value={username}
                  onChange={handleOnChange}
                />
              </div>

              <div className="my-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleOnChange}
                />
              </div>

              <div className="my-3">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={handleOnChange}
                />
              </div>

              <div className="col-auto">
                <p className="mt-3 mb-2">
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    Already have an account?
                  </Link>
                </p>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Signup;