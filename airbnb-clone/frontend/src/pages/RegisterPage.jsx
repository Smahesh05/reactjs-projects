import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { setCredentials } from "../slices/authSlice";
import { useRegisterMutation } from "../slices/usersApiSlice";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [register] = useRegisterMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const { name, email, password } = formData;

  // onChange handler
  const onChangeHandler = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // onsubmit handler for registration
  const onSubmithandler = async (e) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      password,
    };

    try {
      const res = await register(userData).unwrap();
      dispatch(setCredentials({ ...res }));

      // console.log(userData);
      setFormData({
        name: "",
        email: "",
        password: "",
      });
      navigate("/");
      console.log("Registration successful");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
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
