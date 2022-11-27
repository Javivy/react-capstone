import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Cryptos.scss';
import NavbarCryptos from '../Navbar/NavbarCryptos';

const Cryptos = () => {
  const currenciesData = useSelector((store) => store.currencies);

  return (
    <>
      <NavbarCryptos />
      <div className="cryptos-container">
        {
          currenciesData.currencies.map((currency) => (
            <Link className="crypto-link d-flex flex-column justify-content-center align-items-center bg-primary text-white m-2 rounded-4" to="/details" key={currency.id} state={{ state: currency }}>
              <h3 className="text-center">{currency.name}</h3>
              <span>{currency.symbol}</span>
              <p>
                {
                Number(currency.price).toFixed(5)
                }
                $
              </p>
            </Link>
          ))
        }
      </div>
    </>
  );
};

export default Cryptos;
