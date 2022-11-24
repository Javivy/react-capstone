/* eslint-disable global-require */
import React from 'react';
import headerIllustration from '../../assets/header-img.jpg';
import AboutSection from './AboutSection';
import './Home.scss';

const Home = () => (
  <div className="home-container">
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
    <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 500" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150">
      <path d="M 0,500 C 0,500 0,166 0,166 C 55.259756995581725,188.7766936671576 110.51951399116345,211.55338733431518 173,214 C 235.48048600883655,216.44661266568482 305.1817010309279,198.56314432989694 357,175 C 408.8182989690721,151.43685567010306 442.75368188512505,122.19403534609721 511,118 C 579.246318114875,113.80596465390279 681.8035714285713,134.66071428571428 745,157 C 808.1964285714287,179.33928571428572 832.0320324005891,203.16310751104567 882,218 C 931.9679675994109,232.83689248895433 1008.0682989690722,238.68685567010309 1079,228 C 1149.9317010309278,217.31314432989691 1215.6947717231221,190.08946980854196 1275,177 C 1334.3052282768779,163.91053019145804 1387.1526141384388,164.95526509572903 1440,166 C 1440,166 1440,500 1440,500 Z" stroke="none" strokeWidth="0" fill="#e1f5fa" fillOpacity="0.53" className="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 250)" />
      <path d="M 0,500 C 0,500 0,333 0,333 C 62.53626656848304,342.9138438880707 125.07253313696609,352.8276877761414 185,348 C 244.9274668630339,343.1723122238586 302.2461340206186,323.60309278350513 356,314 C 409.7538659793814,304.39690721649487 459.94293078055955,304.759941089838 519,308 C 578.0570692194405,311.240058910162 645.9821428571429,317.3571428571429 720,318 C 794.0178571428571,318.6428571428571 874.128497790869,313.8114874815906 933,302 C 991.871502209131,290.1885125184094 1029.5038659793813,271.39690721649487 1079,275 C 1128.4961340206187,278.60309278350513 1189.8560382916055,304.60088365243007 1252,318 C 1314.1439617083945,331.39911634756993 1377.0719808541971,332.19955817378496 1440,333 C 1440,333 1440,500 1440,500 Z" stroke="none" strokeWidth="0" fill="#e1f5fa" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-1" transform="rotate(-180 720 250)" />
    </svg>
    <div className="line-separator" />
    <AboutSection />
  </div>
);

export default Home;
