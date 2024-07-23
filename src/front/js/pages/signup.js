import React, { useState } from "react";
import "../../styles/signup.css";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.password) {
      console.log(data);
      fetch(process.env.BACKEND_URL + "/api/signup", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          console.log(response);
        });
      navigate("/login");
    } else {
      alert("Error");
    }
  };

  return (
    <>
      <div className="signup-bg-image pt-5">
        <div className="signup-container-1">
          <form className="signup-container-2" onSubmit={handleSubmit}>
            <input
              className="signup-input"
              type="email"
              onChange={(e) => handleInputChange(e)}
              placeholder="Email Address"
              name="email"
              maxLength="80"
              required
            />
            <input
              className="signup-input"
              type="password"
              onChange={(e) => handleInputChange(e)}
              placeholder="Password"
              name="password"
              minLength="6"
              maxLength="50"
              required
            />
            <button className="register-button btn btn-lg">Register</button>
          </form>
        </div>
      </div>
    </>
  );
};
