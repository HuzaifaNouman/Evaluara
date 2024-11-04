import { Outlet } from "react-router-dom";
import SideBar from "@/components/SideBar";
import Navbar from "@/components/Navbar";

function DashboardLayout() {
  return (
    <div className="flex bg-[#EFF6FA]">
      <SideBar />
      <main className="flex-col flex-grow p-4 max-w-[92vw]">
        <Navbar />
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;
