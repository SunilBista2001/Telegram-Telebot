import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <section className="body">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="content-body mt-4 w-full ">
          <Outlet />
        </div>
      </div>
    </section>
  );
}

export default Root;
