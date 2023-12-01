import { Link } from 'react-router-dom'
import logoImg from '../../../assets/images/logo/logo2 (1).png'

const Logo = () => {
  return (
    <Link to='/'>
      <img
        className=' md:block'
        src={logoImg}
        alt='logo'
        width='110'
        height='110'
      />
    </Link>
  )
}

export default Logo