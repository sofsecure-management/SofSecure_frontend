import Footer from "../navbar/Footer";
import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";


const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />   
      <Footer />
    </>
  );
};

export default MainLayout;
