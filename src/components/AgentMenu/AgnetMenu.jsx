
import { BsFillHouseAddFill, BsGraphUp, } from 'react-icons/bs'
import { MdOutlineHomeWork } from "react-icons/md";
import MenuList from '../DashBoard/Sidebar/MenuList';
import { LiaCartPlusSolid } from "react-icons/lia";
import { MdOutlineLocalOffer } from "react-icons/md";

const AgentMenu = () => {
    return (
        <>
            <MenuList
                icon={BsGraphUp}
                label='Statistics'
                address='/dashboard'
              />
              <MenuList
                icon={BsFillHouseAddFill}
                label='Add Property'
                address='addProperty'
              />
              <MenuList
                icon={MdOutlineHomeWork}
                label='My Added Property'
                address='myListings'
              />
              <MenuList
                icon={MdOutlineLocalOffer}
                label='Offered Properties'
                address='offeredProperties'
              />
              <MenuList
                icon={LiaCartPlusSolid}
                label='My Sold Properties'
                address='mySoldProperties'
              />

        </>
    );
};

export default AgentMenu;