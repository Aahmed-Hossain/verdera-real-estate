import MenuList from "../MenuList";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { MdAddHomeWork } from "react-icons/md";

const AdminMenu = () => {
    return (
        <>
            <MenuList address={'manageUsers'} label={'Manage Users'} icon={MdOutlineAdminPanelSettings}></MenuList>
            <MenuList address={'manageProperties'} label={'Manage Properties'} icon={MdAddHomeWork}></MenuList>
        </>
    );
};

export default AdminMenu;