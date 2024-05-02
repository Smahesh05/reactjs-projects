import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setCredentials } from "../../slices/authSlice";
import { useRegisterMutation } from "../../slices/userApiSlice";
import "./Auth.css";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await register({ name, email, password }).unwrap();
      dispatch(setCredentials({ ...res }));

      navigate("/");
      console.log(userInfo);
    } catch (error) {
      console.log(error);
    }
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
