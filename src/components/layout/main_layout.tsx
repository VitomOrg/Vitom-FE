import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";

const MainLayout = () => {
  return (
    <div className="relative flex flex-col w-full min-h-screen ">
      <Navbar />
      <div className="flex flex-1 w-full py-9">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
