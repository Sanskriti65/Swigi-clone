import React from 'react';
import './MainSection1.css';
import { Link } from 'react-router-dom';

const MainSection1= () => {
  return (
    <section className="section-1">
      <div className="nav-down">
        <img className="image left-image imge" src="/images/Veggies_new.avif" alt="left-image" />
        <div className="top-text-center">
          <div className="center-text-wrap">
            <div className='order-text'>Order food & groceries. Discover best restaurants. Swiggy it!</div>
          </div>
          <div className="search-bar">
            <div className="input-location">
              <i className="fa fa-search" aria-hidden="true"></i>
              <input type="search" placeholder="Enter your delivery location" />
            </div>
            <div className="input-menu">
              <input type="search" placeholder="Search for restaurant, item or more" />
            </div>
          </div>
        </div>
        <img className="image right-image imge" src="/images/Sushi_replace.avif" alt="Sushi" />
      </div>
    </section>
  );
}

export default MainSection1;
