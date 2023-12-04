import MenuList from "../MenuList";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { CiBookmarkCheck } from "react-icons/ci";
import { MdOutlineRateReview } from "react-icons/md";

const UserMenu = () => {
    return (
        <>
            <MenuList label={'My Property'} icon={MdOutlineMapsHomeWork} address={'myProperty'}></MenuList>
            <MenuList label={'My WishList'} icon={CiBookmarkCheck} address={'myWishList'}></MenuList>
            <MenuList label={'My Reviews'} icon={MdOutlineRateReview} address={'myReviews'}></MenuList>
        </>
    );
};

export default UserMenu;