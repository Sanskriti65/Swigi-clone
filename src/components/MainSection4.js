import React from 'react';
import './MainSection4.css';
import { Link } from 'react-router-dom';

const items = [
  { id: 1, src: '/images/frui2.avif', alt: 'Basket of fresh apples' },
  { id: 2, src: '/images/fruit10.avif', alt: 'Fresh oranges and bananas' },
  { id: 3, src: '/images/frui5.avif', alt: 'Mix of fresh fruits' },
  { id: 4, src: '/images/frui9.avif', alt: 'Fresh berries' },
];

const MainSection4 = () => {
  return (
    <section className="section-4">
      <div className="container">
        <div className="instamart">
          <div className="instamart-wrap">
            <h1>Shop groceries on Instamart</h1>
          </div>
          <div className="menu-instamart">
            {items.map((item) => (
              <div key={item.id} className="menu-item">
                <button onClick={() => console.log(`Clicked on ${item.alt}`)}>
                  <img
                    src={item.src}
                    alt={item.alt}
                    onError={(e) => (e.target.src = '/images/fallback-image.avif')}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainSection4;
