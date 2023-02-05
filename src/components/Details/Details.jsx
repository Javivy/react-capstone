import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Details.scss';
import { motion } from 'framer-motion';
import NavbarDetails from '../Navbar/NavbarDetails';

const Details = () => {
  const location = useLocation();
  const { state } = location;

  const ScrollToTop = () => {
    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }, []);

    return null;
  };

  return (
    <>
      <NavbarDetails />
      <div className="details">
        <ScrollToTop />
        <div className="img-container">
          <motion.img className="details-img-icon" alt="coin-icon" src={state.state.image} layoutId={state.state.name} />
          <p className="name">
            {state.state.name}
          </p>
        </div>
        <div className="details-container">
          <p>
            Hola
          </p>
        </div>
      </div>
    </>
  );
};

export default Details;
