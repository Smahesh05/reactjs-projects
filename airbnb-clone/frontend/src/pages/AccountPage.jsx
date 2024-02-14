import { Outlet } from "react-router-dom";
import AccountNav from "../components/AccountNav";

const AccountPage = () => {
  return (
    <div>
      <AccountNav />
      <Outlet />
    </div>
  );
};

export default AccountPage;
