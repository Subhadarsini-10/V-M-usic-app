import React from "react";
import "./login.css";
import { loginEndpoint } from "../../spotify";

export default function Login() {
  return (
    <div className="login-page">
      <a href={loginEndpoint}>
        <div className="login-btn">LOG IN</div>
      </a>
    </div>
  );
}
