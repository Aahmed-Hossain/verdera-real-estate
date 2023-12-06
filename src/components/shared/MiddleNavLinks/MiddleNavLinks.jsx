import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const MiddleNavLinks = () => {
    const {user} = useAuth();
    return (
        <div className=" flex gap-3">
            <NavLink to="/" className={({ isActive})=>isActive ? 'border-b-2 text-green-600 border-green-600': 'hover:text-green-600'}>Home</NavLink>
            
            <NavLink to="/allProperties" className={({ isActive})=>isActive ? 'border-b-2 text-green-600 border-green-600': 'hover:text-green-600'}>All Properties</NavLink>
            
            {
                user ? <>
                <NavLink to="/dashboard" className={({ isActive})=>isActive ? 'border-b-2 text-green-600 border-green-600': 'hover:text-green-600'}>Dashboard</NavLink>
               
                </> : ''
            }
        </div>
    );
};

export default MiddleNavLinks;