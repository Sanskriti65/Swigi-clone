import React, { useState } from 'react';
import './BestPlacesSection.css';

const BestGroceries = () => {
  const cities = [
    "Order grocery in Bangalore",
    "Order grocery in Gurgaon",
    "Order grocery in Hyderabad",
    "Order grocery in Delhi",
    " Order grocery in Mumbai",
    "Order grocery in Pune",
    " Order grocery in Kolkata",
    " Order grocery in Chennai",
    " Order grocery in Ahmedabad",
    "Order groceryin Chandigarh",
    " Order grocery in Jaipur",
    " Order grocery in Kochi",
    " Order grocery in Coimbatore",
    "Order grocery in Lucknow",
    " Order grocery in Nagpur",
    "Order groceryin Vadodara",
    "Order grocery in Indore",
    "Order grocery in Vizag",
    " Order grocery in Surat",
    " Order grocery in Dehradun",
    "Order grocery in Noida",
    "Order grocery in Vijayawada"
  ];

  const [visibleCount, setVisibleCount] = useState(9);

  const handleShow_more = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <div>
      <h2>Cities with groceries delivery</h2>
      <div className='button-grid'>
        {cities.slice(0, visibleCount).map((item, index) =>
          <button key={index} className='city-button'>{item}</button>
        )}
        <button onClick={handleShow_more}>Show more</button>
      </div>
    </div>
  );
};

export default BestGroceries;