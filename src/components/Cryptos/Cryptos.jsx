import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Cryptos.scss';
import NavbarCryptos from '../Navbar/NavbarCryptos';
import PaginationComponent from './PaginationComponent';
import { fetchCurrencies } from '../../redux/Coincap';

const Cryptos = () => {
  const currenciesData = useSelector((store) => store.currencies);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrencies());
  }, []);

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
                <motion.img className="card-img-icon" alt="coin-icon" src={currency.image} />
                <div className="card-details d-flex rounded-4 align-items-center flex-column justify-content-center">
                  <motion.img className="card-img-bg" alt="coin-bg" src={currency.image} />
                  <div className="card-details-texts">
                    <h3 className="">{currency.name}</h3>
                    <span className="text-uppercase rounded-pill bg-secondary p-2 text-white mb-2">{currency.symbol}</span>
                    <p className="mt-2">
                      {
                      Number(currency.price).toFixed(5)
                      }
                      $
                    </p>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))
        }
      </div>
      <PaginationComponent />
    </>
  );
};

export default Cryptos;
