import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCurrencies, searchCurrency } from '../../redux/Coincap';
import './Navbar.scss';

const Navbar = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(searchCurrency(term));
  };

  const resetHandler = () => {
    dispatch(fetchCurrencies());
  };

  return (
    <div className="navbar">
      <div className="navbar-title">
        <NavLink to="/">
          <img src="https://cryptologos.cc/logos/usd-coin-usdc-logo.png" alt="coin-logo" />
        </NavLink>
      </div>
      <div className="searcher">
        <form onSubmit={submitHandler}>
          <input value={term} onChange={(e) => setTerm(e.target.value)} className="p-2 pr-5 rounded" style={{ border: '1px solid #ccc' }} type="search" id="search-input" placeholder="Search" />
          <button className="rounded-pill p-2 mx-2 bg-white " style={{ border: '1px solid #ccc' }} type="submit">
            <FontAwesomeIcon style={{ color: '#666' }} icon={icon({ name: 'search', style: 'solid' })} />
          </button>
        </form>
      </div>
      <div className="nav-links">
        <NavLink className="link-item" to="/">
          Home
        </NavLink>
        <button onClick={resetHandler} type="button" className="link-item" style={{ background: '#e1f5fa', border: 'none' }}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Navbar;
