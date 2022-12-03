import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import './Navbar.scss';

const Navbar = () => (
  <div className="navbar">
    <div className="navbar-title">
      <NavLink to="/cryptos">
        <FontAwesomeIcon icon={icon({ name: 'chevron-left', style: 'solid' })} />
      </NavLink>
    </div>
    <div className="nav-links">
      <NavLink className="link-item" to="/cryptos">
        Cryptos
      </NavLink>
    </div>
  </div>
);

export default Navbar;
