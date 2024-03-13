import { Link } from 'react-router-dom'
import logoImg from '../../assets/images/logo/logo2.png'
import MenuDropdown from './MenuDropdown'
import MiddleNavLinks from '../shared/MiddleNavLinks/MiddleNavLinks'

const Navbar = () => {
  return (
    <div className='fixed w-11/12 py-2 bg-white z-10 shadow-sm'>
      <div className=''>
          <div className='flex flex-row  items-center justify-between gap-3 md:gap-'>
            {/* Logo */}
            <Link to='/'>
              <img
                className='md:block w-[13rem]'
                src={logoImg}
                alt='logo' 
              />
            </Link>
            {/* middle links */}
            <div className='font-bold '>
            <MiddleNavLinks></MiddleNavLinks>
            </div>
            {/* Dropdown Menu */}
            <MenuDropdown />
          </div>
      </div>
    </div>
  )
}

export default Navbar
