import Header from "@/components/layout/header";
import SiderBar from "@/components/layout/sider_bar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <SiderBar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 px-10 ">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
