import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { name, email, password } = formData;

  const onChangeHandler = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmithandler = async (e) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      password,
    };

    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/",
        userData
      );

      if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
      }
      // console.log(userData);
      setFormData({
        name: "",
        email: "",
        password: "",
      });
      navigate("/");
      console.log("Registration successful");
    } catch (err) {
      console.error("Error during registration:", err.message);
    }
  };
  return (
    <div className="mt-4 grow">
      <div>
        <h1 className="text-center text-4xl mb-4">Register</h1>
        <form className="max-w-md mx-auto" onSubmit={onSubmithandler}>
          <input
            type="text"
            placeholder="john"
            name="name"
            value={name}
            onChange={onChangeHandler}
          />

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
            value={password}
            onChange={onChangeHandler}
          />

          <button className="primary" type="submit">
            Register
          </button>
        </form>
        <div className="text-center py-2 text-gray-500">
          Already a member?{" "}
          <Link to="/login" className="text-black underline font-semibold">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
