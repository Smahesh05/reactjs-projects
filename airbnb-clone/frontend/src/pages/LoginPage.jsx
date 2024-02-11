import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { setCredentials } from "../slices/authSlice";
import { useLoginMutation } from "../slices/usersApiSlice";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const { email, password } = formData;

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  //changeHnadler
  const onChangeHandler = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  //submit Handler
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await login(formData).unwrap();
      dispatch(setCredentials({ ...response }));
      setFormData({
        email: "",
        password: "",
      });
      navigate("/");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
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
