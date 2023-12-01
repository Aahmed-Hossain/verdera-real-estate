
import { BsFillHouseAddFill, BsGraphUp } from 'react-icons/bs'
import { MdOutlineHomeWork } from "react-icons/md";
import MenuList from '../MenuList';

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
                label='My Listings'
                address='myListings'
              />

        </>
    );
};

export default AgentMenu;