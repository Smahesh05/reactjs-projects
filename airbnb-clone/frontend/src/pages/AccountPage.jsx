import { Link, Outlet, useParams } from "react-router-dom";

const AccountPage = () => {
  let { subPage } = useParams();

  if (subPage === undefined) {
    subPage = "profile";
  }

  // console.log(subPage);

  function activeClasses(type = null) {
    let classes = "py-2 px-6";

    if (type === subPage) {
      classes += " bg-primary text-white rounded-full";
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

      <Outlet />
    </div>
  );
};

export default AccountPage;
