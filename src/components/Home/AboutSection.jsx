import React from 'react';
import illustrations from '../../assets/images.js';
import './AboutSection.scss';

const AboutSection = () => (
  <section className="about-section">
    <h2>
      The most trusted cryptocurrency website
    </h2>
    <span>
      Here are some reasons why you should choose us
    </span>
    <div className="cards-container">
      <div className="about-card">
        <img src={illustrations.reviewsIllustration} alt="reviews-illustration" />
        <div className="card-details">
          <h3>Great rated</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, dolores!</p>
          <button className="card-link" type="button">Learn more...</button>
        </div>
      </div>
      <div className="about-card">
        <img src={illustrations.storageIllustration} alt="storage-illustration" />
        <div className="card-details">
          <h3>Secure Storage</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, dolores!</p>
          <button className="card-link" type="button">Learn more...</button>
        </div>
      </div>
      <div className="about-card">
        <img src={illustrations.securityIllustration} alt="security-illustration" />
        <div className="card-details">
          <h3>Protected by Insurance</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, dolores!</p>
          <button className="card-link" type="button">Learn more...</button>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
