import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Navbar />
      <div className="flex flex-1 w-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
