import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../pages/Footer/Footer";

const MainLayout = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <div className="min-h-screen"><Outlet></Outlet></div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;