import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/footer/footer";
import Navbar from "./components/Navbar/navbar";
import { SidebarProvider } from "./context/sidebar-context";
import Sidebar from "./components/sidebar/sidebar";

const Layout = () => {
  const location = useLocation();
  
  console.log("location: ", location);
  return (
    <SidebarProvider>
      {(location.pathname != "/" && !location.pathname.startsWith("/dashboard")) && <Navbar />}
      <Sidebar />
      <Outlet />
      <Footer />
    </SidebarProvider>
  );
};

export default Layout;
