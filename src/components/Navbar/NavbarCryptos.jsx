import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  console.log('hola');

  return (
    <div className="navbar">
      <div className="navbar-title">
        <NavLink to="/">
          <img src="https://cryptologos.cc/logos/usd-coin-usdc-logo.png" alt="coin-logo" />
        </NavLink>
      </div>
      <div className="searcher">
        <input className="p-2 pr-5 rounded" style={{ border: '1px solid #ccc' }} type="search" id="search-input" placeholder="Search" />
      </div>
      <div className="nav-links">
        <NavLink className="link-item" to="/">
          Home
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
