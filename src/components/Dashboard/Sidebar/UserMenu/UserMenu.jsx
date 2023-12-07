import MenuList from "../MenuList";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { CiBookmarkCheck } from "react-icons/ci";
import { MdOutlineRateReview } from "react-icons/md";
import { FaOpencart } from "react-icons/fa";

const UserMenu = () => {
    return (
        <>
            <MenuList label={'My Property'} icon={MdOutlineMapsHomeWork} address={'myProperties'}></MenuList>
            <MenuList label={'My WishList'} icon={CiBookmarkCheck} address={'myWishList'}></MenuList>
            <MenuList label={'My Reviews'} icon={MdOutlineRateReview} address={'myReviews'}></MenuList>
            <MenuList label={'My Bought Property'} icon={FaOpencart} address={'myBoughtProperty'}></MenuList>
        </>
    );
};

export default UserMenu;