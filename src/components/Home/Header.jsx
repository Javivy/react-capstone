/* eslint-disable global-require */
import React from 'react';
import headerIllustration from '../../assets/header-img.jpg';

const Header = () => (
  <section className="header">
    <div className="header-left">
      <h1 className="title">
        Cryptos World is Here!
      </h1>
      <p>
        Send Receive & exchange Bitcoin and 100+ crytpcurrencies with ease
        on the world&apos;s leading Desktop, Mobile and Hardware crypto website.
      </p>
      <div className="currencies-used">
        <span>
          We work with these cryptos and more!
        </span>
        <ul>
          <li>
            <img src={require('../../assets/btc-logo.png')} alt="bitcoin logo" />
          </li>
          <li>
            <img src={require('../../assets/ethereum-logo.png')} alt="ethereum logo" />
          </li>
          <li>
            <img src={require('../../assets/usdt-logo.png')} alt="usdt logo" />
          </li>
          <li>
            <img src={require('../../assets/bnb-logo.png')} alt="bnb logo" />
          </li>
          <li>
            <img src={require('../../assets/usdc-logo.png')} alt="usdc logo" />
          </li>
        </ul>
      </div>
    </div>
    <div className="header-right">
      <img src={headerIllustration} alt="header-illustration" />
    </div>
  </section>
);

export default Header;
