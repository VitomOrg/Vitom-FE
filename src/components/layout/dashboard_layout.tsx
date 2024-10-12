import Header from "@/components/layout/header";
import SiderBar from "@/components/layout/sider_bar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-12 gap-10">
      <section className="col-span-1">
        <SiderBar />
      </section>
      <section className="col-span-11 space-y-10">
        <Header />
        <main>
          <Outlet />
        </main>
      </section>
    </div>
  );
};

export default DashboardLayout;
