
import { BsFillHouseAddFill } from 'react-icons/bs'
import { MdOutlineHomeWork } from "react-icons/md";
import { LiaCartPlusSolid } from "react-icons/lia";
import { MdOutlineLocalOffer } from "react-icons/md";
import { BsGraphUp } from "react-icons/bs";
import MenuList from '../Dashboard/Sidebar/MenuList';

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