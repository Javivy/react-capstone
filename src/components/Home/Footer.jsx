import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.scss';

const Footer = () => (
  <Container className="my-5">
    <Row className="footer">
      <Col sm md={4} className="footer-item d-flex flex-column align-items-center">
        <h3 className="footer-title">
          CryptoWebsite
        </h3>
        <p className="text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, labore sint.
          Magnam totam, laudantium praesentium maxime alias nobis dicta. A.
        </p>
        <ul className="social-links d-flex">
          <li>
            <button className="link footer-link" type="button">
              <FontAwesomeIcon icon={brands('twitter')} />
            </button>
          </li>
          <li>
            <button className="link footer-link" type="button">
              <FontAwesomeIcon icon={brands('telegram')} />
            </button>
          </li>
          <li>
            <button className="link footer-link" type="button">
              <FontAwesomeIcon icon={brands('instagram')} />
            </button>
          </li>
          <li>
            <button className="link footer-link" type="button">
              <FontAwesomeIcon icon={brands('linkedin')} />
            </button>
          </li>
        </ul>
      </Col>
      <Col sm className="footer-item d-flex flex-column align-items-center">
        <h5 className="footer-title">
          Exchange
        </h5>
        <ul className="text-center">
          <li>
            <button className="link text-center" type="button">
              Exchange
            </button>
          </li>
          <li>
            <button className="link text-center" type="button">
              Wallet
            </button>
          </li>
          <li>
            <button className="link text-center" type="button">
              Explorer
            </button>
          </li>
          <li>
            <button className="link text-center" type="button">
              Net
            </button>
          </li>
          <li>
            <button className="link text-center" type="button">
              Learn
            </button>
          </li>
        </ul>
      </Col>
      <Col sm className="footer-item d-flex flex-column align-items-center">
        <h5 className="footer-title">
          For Community
        </h5>
        <ul className="text-center">
          <li>
            <button className="link text-center" type="button">
              FeeWallet Peer Program
            </button>
          </li>
          <li>
            <button className="link text-center" type="button">
              FeeWallet Affiliate Program
            </button>
          </li>
          <li>
            <button className="link text-center" type="button">
              Community
            </button>
          </li>
        </ul>
      </Col>
      <Col sm className="footer-item d-flex flex-column align-items-center">
        <h5 className="footer-title">
          About Us
        </h5>
        <ul className="text-center">
          <li>
            <button className="link text-center" type="button">
              About Us
            </button>
          </li>
          <li>
            <button className="link text-center" type="button">
              Business Contacts
            </button>
          </li>
          <li>
            <button className="link text-center" type="button">
              Careers
            </button>
          </li>
        </ul>
      </Col>
    </Row>
  </Container>
);

export default Footer;
