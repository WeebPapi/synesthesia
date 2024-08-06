import { Navbar, Footer } from "../";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
