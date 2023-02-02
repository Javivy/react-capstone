import React from 'react';
import { useLocation } from 'react-router-dom';
import './Details.scss';
import NavbarDetails from '../Navbar/NavbarDetails';

const Details = () => {
  const location = useLocation();
  const { state } = location;

  return (
    <>
      <NavbarDetails />
      <div className="details-container">
        <p className="name h1">
          {state.state.name}
        </p>
        <p className="symbol">
          <span>Symbol: </span>
          <span className="text-uppercase">{state.state.symbol}</span>
        </p>
        <p className="price">
          <span>Price: </span>
          {state.state.price}
        </p>
        <p className="supply">
          <span>Supply: </span>
          {state.state.supply}
        </p>
        <p>
          <span>Total Volume: </span>
          {state.state.totalVolume}
        </p>
        <p className="volume">
          <span>Volume 24h: </span>
          {state.state.volume24h}
        </p>
      </div>
    </>
  );
};

export default Details;
