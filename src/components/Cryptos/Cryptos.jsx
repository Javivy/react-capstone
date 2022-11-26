import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Cryptos.scss';
import Navbar from '../Navbar/Navbar';

const Cryptos = () => {
  const currenciesData = useSelector((store) => store.currencies);

  console.log(currenciesData.currencies);

  return (
    <>
      <Navbar />
      <div className="cryptos-container">
        {
          currenciesData.currencies.map((currency) => (
            <Link className="crypto-link" to="/details" key={currency.id} state={{ state: currency }}>
              <h3>{currency.name}</h3>
              <span>{currency.symbol}</span>
              <p>
                {
                currency.price.split('.')[0]
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
