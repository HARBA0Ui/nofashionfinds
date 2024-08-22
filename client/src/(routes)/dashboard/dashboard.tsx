import { Outlet } from "react-router-dom";
import DashSidebar from "./components/dash-sidebar";

const Dashboard = () => {
  return (
    <div className="flex bg-gray-100/50">
      <DashSidebar />
      <div className="flex-1 p-12">
        <Outlet/>
      </div>
    </div>
  );
};

export default Dashboard;
