import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Cryptos.scss';
import NavbarCryptos from '../Navbar/NavbarCryptos';

const Cryptos = () => {
  const currenciesData = useSelector((store) => store.currencies);

  return (
    <>
      <NavbarCryptos />
      <div className="cryptos-container bg-secondary pt-5">
        {
          currenciesData.currencies.map((currency) => (
            <Link className="crypto-link bg-white m-2 rounded-4 d-flex align-items-center" to="/details" key={currency.id} state={{ state: currency }}>
              <motion.div
                className="d-flex flex-column justify-content-around align-items-center h-100 w-100"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <motion.img alt="coin-icon" src={currency.image} />
                <div>
                  <h3 className="">{currency.name}</h3>
                  <span className="text-uppercase">{currency.symbol}</span>
                  <p>
                    {
                    Number(currency.price).toFixed(5)
                    }
                    $
                  </p>
                </div>
              </motion.div>
            </Link>
          ))
        }
      </div>
    </>
  );
};

export default Cryptos;
