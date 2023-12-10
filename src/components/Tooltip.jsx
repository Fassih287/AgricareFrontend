// Tooltip.js
import React from "react";
import PropTypes from "prop-types";
import { FaUser } from "react-icons/fa"; // Import the appropriate React UI icon
import "./Tooltip.css";
import { useNavigate } from "react-router-dom";
import { chatBackendUrl } from "../data/data";
import axios from "axios";

const Tooltip = ({ experts, children }) => {
  const navigate = useNavigate();
  const openChat = async (userId) => {
    // alert("GGG");
    const data = await axios.post(`${chatBackendUrl}api/v1/chatAgri`, {
      userId,
      mongoId: localStorage.getItem("mongoId"),
    });
    if (data) {
      window.location.href = "http://localhost:3000";
    }
  };

  return (
    <div className="tooltip-container">
      {children}
      <div className="tooltip-content">
        <ul>
          {experts.map((expert) => (
            <li key={expert.id}>
              <FaUser
                size={30}
                color="blue"
                className="expert-icon"
                onClick={() => openChat(expert.mongoId)}
              />
              <span>{expert.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Tooltip.propTypes = {
  experts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      // avatar: PropTypes.string.isRequired, // No need for avatar in this case
    })
  ).isRequired,
  children: PropTypes.node.isRequired,
};

export default Tooltip;
