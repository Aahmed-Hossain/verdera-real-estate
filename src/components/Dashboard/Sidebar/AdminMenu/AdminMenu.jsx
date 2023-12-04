import MenuList from "../MenuList";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { MdAddHomeWork } from "react-icons/md";
import { SiAutodeskrevit } from "react-icons/si";

const AdminMenu = () => {
    return (
        <>
            <MenuList address={'manageUsers'} label={'Manage Users'} icon={MdOutlineAdminPanelSettings}></MenuList>
            <MenuList address={'manageProperties'} label={'Manage Properties'} icon={MdAddHomeWork}></MenuList>
            <MenuList address={'manageReviews'} label={'Manage Reviews'} icon={SiAutodeskrevit}></MenuList>
        </>
    );
};

export default AdminMenu;