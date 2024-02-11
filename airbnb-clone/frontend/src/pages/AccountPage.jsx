import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { logout } from "../slices/authSlice";
import { useLogoutMutation } from "../slices/usersApiSlice";
import PlacesPage from "./PlacesPage";

const AccountPage = () => {
  let { subPage } = useParams();

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

  if (subPage === undefined) {
    subPage = "profile";
  }

  // console.log(subPage);

  function activeClasses(type = null) {
    let classes = "py-2 px-6 rounded-full";

    if (type === subPage) {
      classes += " bg-primary text-white ";
    } else {
      classes += " bg-gray-200";
    }
    return classes;
  }

  return (
    <div>
      <nav className="w-full flex mt-8 gap-2 mb-8 justify-center items-center">
        <Link className={activeClasses("profile")} to={"/account"}>
          My Profile
        </Link>
        <Link className={activeClasses("bookings")} to={"/account/bookings"}>
          My Bookings
        </Link>
        <Link className={activeClasses("places")} to={"/account/places"}>
          My accommodations
        </Link>
      </nav>

      {subPage === "profile" && (
        <div className="text-center max-w-lg mx-auto">
          Logged in as {userInfo.name}
          <br />
          <button className="primary max-w-sm mt-2" onClick={logoutHandler}>
            Log out
          </button>
        </div>
      )}

      {subPage === "places" && <PlacesPage />}
    </div>
  );
};

export default AccountPage;
