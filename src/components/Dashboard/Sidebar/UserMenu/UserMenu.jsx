import MenuList from "../MenuList";
import { MdOutlineMapsHomeWork } from "react-icons/md";


const UserMenu = () => {
    return (
        <>
            <MenuList label={'My Property'} icon={MdOutlineMapsHomeWork} address={'myProperty'}></MenuList>
        </>
    );
};

export default UserMenu;