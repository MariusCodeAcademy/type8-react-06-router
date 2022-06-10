import { Link, NavLink } from 'react-router-dom';

const MainNav = () => {
  return (
    <nav>
      <NavLink className='nav-link' exact to='/'>
        Home
      </NavLink>
      <NavLink className='nav-link' to='/about'>
        About
      </NavLink>
      <NavLink className='nav-link' to='/contact'>
        Contact
      </NavLink>
    </nav>
  );
};

export default MainNav;
