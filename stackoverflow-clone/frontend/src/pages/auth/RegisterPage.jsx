import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      name,
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
            <label htmlFor="name">
              <h4>name</h4>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
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
              <h4>Password</h4>
              <input
                type="text"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <button className="auth-btn">Register</button>
        </form>

        <p>
          have an account? <Link to="/auth">Sign In</Link>
        </p>
      </div>
    </section>
  );
}

export default RegisterPage;
