// src/components/molecules/CallToActionCard.js
import React from "react";
import Text from "../atoms/Text";

const CallToActionCard = () => (
  <div className="call-to-action-card">
    <div className="div-text">
      <img src="/logoIslam.png" alt="Profile" className="profile-image" />
      <Text
        className="name"
        text="Free 15-min call"
        style={{ fontSize: "16px", fontWeight: "600", color: "#E1E1E2" }}
      />
    </div>

    <Text
      className="availability-status"
      text={
        <div className="availability">
          <span style={{}}>
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="0.5"
                width="16"
                height="16"
                rx="8"
                fill="#00FF22"
                fill-opacity="0.25"
              />
              <rect x="4" y="4.5" width="8" height="8" rx="4" fill="#00CE1B" />
            </svg>
          </span>
          <span>Available now!</span>
        </div>
      }
      styleClass="availability-status"
      style={{ fontSize: "16px", fontWeight: "400", color: "#E1E1E2" }}
    />
  </div>
);

export default CallToActionCard;
