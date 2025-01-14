import React from 'react';
import './MainSection3.css';
import { Link } from 'react-router-dom';

const MainSection3= () => {
  return (
    <section className="section-3">
      <div className="container">
        <div className="dishes">
          <div className="dishes-wrap">
            <h1>Order our best food options</h1>
          </div>
          <div className="menu-dishes">
            <div><a href="https://example.com"><img src="/images/Burger.avif" alt="Burger" /></a></div>
            <div><a href="https://example.com"><img src="/images/Chinese.avif" alt="Chinese" /></a></div>
            <div><a href="https://example.com"><img src="/images/Ice Cream.avif" alt="Ice Cream" /></a></div>
            <div><a href="https://example.com"><img src="/images/Momo.avif" alt="Momo" /></a></div>
            <div><a href="https://example.com"><img src="/images/North Indian.avif" alt="North Indian" /></a></div>
            <div><a href="https://example.com"><img src="/images/Pastry.avif" alt="Pastry" /></a></div>
            <div><a href="https://example.com"><img src="/images/Pav Bhaji.avif" alt="Pav Bhaji" /></a></div>
            <div><a href="https://example.com"><img src="/images/Pizza.avif" alt="Pizza" /></a></div>
            <div><a href="https://example.com"><img src="/images/Pure Veg.avif" alt="Pure Veg" /></a></div>
            <div><a href="https://example.com"><img src="/images/Rolls.avif" alt="Rolls" /></a></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainSection3;
