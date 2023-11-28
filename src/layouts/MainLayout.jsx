import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../pages/Footer/Footer";

const MainLayout = () => {
    return (
        <div className='w-11/12 mx-auto '>
            <Navbar></Navbar>
            <div className="min-h-screen"><Outlet></Outlet></div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;