import EmployeePieChart from "../Charts/EmployeePieChart";
import GenderPieChart from "../Charts/GenderPieChart";

import Header from "../UIElements/Header";
import Sidebar from "../UIElements/Sidebar";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard_section">
        <Sidebar />
        <div className="container">
          <div className="content">
            <GenderPieChart />
            <EmployeePieChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
