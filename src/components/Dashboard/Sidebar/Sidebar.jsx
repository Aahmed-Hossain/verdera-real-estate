import { useState } from 'react'
// Components
import Logo from './../../shared/Logo/Logo';
import MenuList from './MenuList';
import ToggleBtn from '../../shared/Button/ToggleBtn';
// Icons
import { GrLogout } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'
import { AiOutlineBars } from 'react-icons/ai'
import useAuth from '../../../hooks/useAuth';
import AgentMenu from '../../AgentMenu/AgnetMenu';
import useRole from '../../../hooks/useRole';
import UserMenu from './UserMenu/UserMenu';
import AdminMenu from './AdminMenu/AdminMenu';

const Sidebar = () => {
  const [userRole] = useRole()
  console.log(userRole);
  const {logOut} = useAuth();
  const [toggle, setToggle] = useState(false)
  const [isActive, setActive] = useState(false)

  //   For guest/host menu item toggle button
  const toggleHandler = event => {
    setToggle(event.target.checked)
  }
  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive)
  }
  
  return (
    <>
      {/* Small Screen Navbar */}
      <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
        <div>
          <div className='block cursor-pointer p-4 font-bold '>
            <Logo />
          </div>
        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
        >
          <AiOutlineBars className='h-5 w-5' />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && '-translate-x-full'
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-green-200 mx-auto'>
              <Logo />
            </div>
          </div>

          {/* Nav Items */}
          <div className='flex flex-col justify-between flex-1 mt-6'>
            {/*TODO:   If a user is agent */}
           {/* {userRole.role === 'Agent' &&  <ToggleBtn toggleHandler={toggleHandler} />} */}
            <nav>
              {/* Menu Items */}

              { userRole?.role === 'User'  && <UserMenu></UserMenu> }
              {/* to execute toggle for agent can user and agent also */}
               {/* { userRole?.role === 'Agent' ? toggle ? <UserMenu></UserMenu>  : <AgentMenu></AgentMenu> : ''} */}
              { userRole?.role === 'Agent'  && <AgentMenu></AgentMenu> }
              { userRole?.role === 'Admin'  && <AdminMenu></AdminMenu> }
            </nav>
          </div>
        </div>

        <div>
          <hr />

          <MenuList
            icon={FcSettings}
            label='Profile'
            address='/dashboard/profile'
          />
          <button onClick={logOut}  className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'>
            <GrLogout className='w-5 h-5' />
            
            <span className='mx-4 font-medium'>Logout</span>
           
          </button>
        </div>
      </div>
    </>
  )
}

export default Sidebar
