import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./adminlogin.module.css";
// import PersonIcon from "@mui/icons-material/Person";
import { backendUrl } from "../data/data";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPopup, setShowPopup] = useState(true); // Set it to true to display the form by default
  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission based on the selected role
    const data = await fetch(`${backendUrl}admin/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    if (data.status == 201) {
      let token = await data.json();
      console.log(token);
      localStorage.setItem("adminToken", token.data);
      localStorage.setItem("role", "admin");
      navigate("/adminDash");
    } else {
      alert("Invalid Credentials");
    }
  };

  const handleCrossIconClick = () => {
    setShowPopup(false);
    navigate("/");
  };

  return (
    <>
      <div className="adminlogin-container">
        <div className="adminlogin-content">
          {/* <div className="adminlogin-avatar">
            <PersonIcon style={{ fontSize: 30, color: "#fff" }} />
          </div> */}
          <h1>Admin Sign In</h1>
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              autoFocus
              required
              value={email}
              onChange={(e) => setEmail(event.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(event.target.value)}
            />
            <button type="submit">Sign In</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
