import MenuList from "../MenuList";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { CiBookmarkCheck } from "react-icons/ci";


const UserMenu = () => {
    return (
        <>
            <MenuList label={'My Property'} icon={MdOutlineMapsHomeWork} address={'myProperty'}></MenuList>
            <MenuList label={'My WishList'} icon={CiBookmarkCheck} address={'myWishList'}></MenuList>
        </>
    );
};

export default UserMenu;