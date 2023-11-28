import { Link } from 'react-router-dom'
import Container from '../Navbar/Container'
import logoImg from '../../assets/images/logo/logo2.png'
import MenuDropdown from './MenuDropdown'
import MiddleNavLinks from '../shared/MiddleNavLinks/MiddleNavLinks'

const Navbar = () => {
  return (
    <div className='fixed w-full bg-white z-10 shadow-sm'>
      <div className='py-4 border-b-[1px]'>
        <Container>
          <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
            {/* Logo */}
            <Link to='/'>
              <img
                className=' md:block w-[13rem]'
                src={logoImg}
                alt='logo' 
              />
            </Link>
            {/* middle links */}
            <div className='font-bold'>
            <MiddleNavLinks></MiddleNavLinks>
            </div>
            {/* Dropdown Menu */}
            <MenuDropdown />
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Navbar
