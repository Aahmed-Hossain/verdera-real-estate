import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import avatarImg from "../../assets/images/logo/placeholder.jpg";
import Swal from "sweetalert2";

const MenuDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigateToLogin = useNavigate()
  const { user,logOut } = useAuth();

  const handleLogout = async () => {
    try {
      await logOut(); 
      Swal.fire("Nice!", "You logged out successfully!", "success");
      navigateToLogin('/login');
    } catch (err) {
      Swal.fire("Oops!", err.message, "error");
    }
  }
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
      
        {/* Become A Host btn */}
        {/* <div className="hidden md:block">
          <button className="disabled:cursor-not-allowed cursor-pointer hover:bg-neutral-100 py-3 px-4 text-sm font-bold rounded-full  hover:text-green-500 transition">
            Host your home
          </button>
        </div> */}
        {/* Dropdown btn */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            {/* Avatar */}
            <img
              className="rounded-full"
              referrerPolicy="no-referrer"
              src={user && user.photoURL ? user.photoURL : avatarImg}
              alt="profile"
              height="30"
              width="30"
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            
           {
            user ? 
            <>
            <Link
              to="/dashboard"
              className="px-4 py-3 hover:bg-neutral-100 transition font-bold hover:text-green-600"
            >
              Dashboard
            </Link>
            <Link onClick={handleLogout}  className="px-4 py-3 hover:bg-neutral-100 transition font-bold hover:text-green-600">Logout</Link>
            </> 
            : 
      
            <>
             <Link
              to="/login"
              className="px-4 py-3 hover:bg-neutral-100 transition font-bold hover:text-green-600 "
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-3 hover:bg-neutral-100 transition font-bold hover:text-green-600"
            >
              Sign Up
            </Link>
            </>
           }
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuDropdown;
