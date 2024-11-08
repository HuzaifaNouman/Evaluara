import { Outlet } from "react-router-dom";
import SideBar from "@/components/SideBar";
import Navbar from "@/components/Navbar";

function DashboardLayout() {
  return (
    <div className="flex bg-[#EFF6FA]">
      <div>
        <SideBar />
      </div>
      <main className="flex-col flex-grow p-2 min-[768px]:max-w-[92vw] max-w-full">
        <Navbar />
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;
