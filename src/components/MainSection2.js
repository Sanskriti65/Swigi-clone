import React from 'react';
import './MainSection2.css'; // Make sure to create a corresponding CSS file
import { Link } from 'react-router-dom';

const MainSection2 = () => {
  return (
    <section className="section-2 clearfix ">
      <div className="menu-boxes ">
        <div className="boxes  inner">
          <div className="specific left">
            <a href="https://example.com"><img src="/images/delivery.avif" alt="Delivery" /></a>
          </div>
          <div className="specific-size">
            <a href="https://example.com"><img src="/images/delivery.avif" width="200px" height="200px" alt="Delivery" /></a>
          </div>
          <div className="specific ">
            <a href="https://example.com"><img src="/images/instamart.avif" alt="Instamart" /></a>
          </div>
          <div className="specific specific-size">
            <a href="https://example.com"><img src="/images/instamart.avif" width="200px" height="200px" alt="Instamart" /></a>
          </div>
          <div className="specific">
            <a href="https://example.com"><img src="/images/dineout.avif" alt="Dineout" /></a>
          </div>
          <div className="specific-size">
            <a href="https://example.com"><img src="/images/dineout.avif" width="200px" height="200px" alt="Dineout" /></a>
          </div>
          <div className="specific">
            <a href="https://example.com"><img src="/images/genie.avif" alt="Genie" /></a>
          </div>
          <div className="specific-size">
            <a href="https://example.com"><img src="/images/genie.avif" width="200px" height="200px" alt="Genie" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainSection2;
