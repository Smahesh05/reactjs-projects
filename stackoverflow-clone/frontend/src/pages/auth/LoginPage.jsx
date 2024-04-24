import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    console.log(data);
    setEmail("");
    setPassword("");
  };

  return (
    <section className="auth-section">
      <div className="auth-container-2">
        <form onSubmit={submitHandler} className="card">
          <div className="form-group">
            <label htmlFor="email">
              <h4>Email</h4>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="password">
              <div>
                <h4>Password</h4>
                <h4>Forgot Password?</h4>
              </div>
              <input
                type="text"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <button className="auth-btn">Login</button>
        </form>

        <p>
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
      </div>
    </section>
  );
}

export default LoginPage;
