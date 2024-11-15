import { Outlet } from "react-router-dom";
import SideBar from "@/components/SideBar";
import Navbar from "@/components/Navbar";

function DashboardLayout() {
  return (
    <div className="flex bg-baselight dark:bg-basedark px-5 max-[768px]:px-0">
      <div>
        <SideBar />
      </div>
      <main className="flex-col flex-grow mt-5 ml-4 max-[768px]:ml-0">
        <Navbar />
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;
