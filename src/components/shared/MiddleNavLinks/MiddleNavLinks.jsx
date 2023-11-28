import { NavLink } from "react-router-dom";

const MiddleNavLinks = () => {
    return (
        <div>
            <NavLink to="/allProperties" className={({ isActive})=>isActive ? 'border-b-2 text-green-600 border-green-600': 'hover:text-green-600'}>All Properties</NavLink>
        </div>
    );
};

export default MiddleNavLinks;