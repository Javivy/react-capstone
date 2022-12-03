import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => (
  <div className="navbar">
    <div className="navbar-title">
      <NavLink to="/">
        <img src="https://cryptologos.cc/logos/usd-coin-usdc-logo.png" alt="coin-logo" />
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
