import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logout } from "../slices/authSlice";
import { useLogoutMutation } from "../slices/usersApiSlice";

const MyProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (err) {
      toast.error(err);
    }
  };
  return (
    <div>
      <div className="text-center max-w-lg mx-auto">
        Logged in as {userInfo.name}
        <br />
        <button className="primary max-w-sm mt-2" onClick={logoutHandler}>
          Log out
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
