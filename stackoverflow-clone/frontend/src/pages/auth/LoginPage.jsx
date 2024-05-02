import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setCredentials } from "../../slices/authSlice";
import { useLoginMutation } from "../../slices/userApiSlice";
import "./Auth.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
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
