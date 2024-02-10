import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { email, password } = formData;

  const onChangeHandler = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const userInfo = {
      email,
      password,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        userInfo
      );

      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      setFormData({
        email: "",
        password: "",
      });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      <div className="mt-4 grow">
        <div>
          <h1 className="text-center text-4xl mb-4">Login</h1>
          <form className="max-w-md mx-auto" onSubmit={onSubmitHandler}>
            <input
              type="email"
              placeholder="exe@gmail.com"
              name="email"
              value={email}
              onChange={onChangeHandler}
            />

            <input
              type="password"
              name="password"
              placeholder="********"
              value={password}
              onChange={onChangeHandler}
            />
            <button className="primary" type="submit">
              Login
            </button>
          </form>
          <div className="text-center py-2 text-gray-500">
            Don&apos;t have an account yet?{" "}
            <Link to="/register" className="text-black underline font-semibold">
              Register
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoginPage;
