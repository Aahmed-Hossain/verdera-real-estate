import { Outlet } from "react-router-dom"
import Sidebar from "../components/DashBoard/Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen md:flex">
      {/* sidebar */}
      <Sidebar></Sidebar>
      <div className="flex-1 md:ml-64">
        <div className="pt-4">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
