import { Outlet } from "react-router-dom";
import Navbar from "@components/Navbar";
import Sidebar from "@/components/sidebar";

const PageLayout = () => {
  return (
    <>
      <div className="relative w-full h-screen bg-[#F0F2F5]">
        <Navbar />
        <div className="flex mt-24">
          <div className="w-[15%] fixed left-0 top-[97px] h-full z-50 pr-5">
            <Sidebar />
          </div>
          <div className="w-[85%] ml-auto relative">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default PageLayout;
