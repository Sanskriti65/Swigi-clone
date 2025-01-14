import React from "react";
import "./instamart.css"; // Add your CSS file
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from 'react-router-dom';

const categories = () => [
  { img: "../../images/image/frui2.avif", title: "Fresh Fruit" },
  { img: "../../images/image/veg.avif", title: "Fresh Vegetables" },
  { img: "../../images/image/fruit4.avif", title: "Atta, Rice, and Dals" },
  { img: "../../images/image/fruit5.avif", title: "Masalas and Dry Fruits" },
  { img: "../../images/image/fruit3.avif", title: "Dairy, Bread, and Eggs" },
  { img: "../../images/image/frui5.avif", title: "Oils and Ghee" },
  { img: "../../images/image/frui9.avif", title: "Meat and Seafood" },
  { img: "../../images/image/fruit6.avif", title: "Munchies" },
  { img: "../../images/image/fruit8.avif", title: "Cold Drinks and Juices" },
  { img: "../../images/image/fruit7.avif", title: "Sweet Tooth" },
  { img: "../../images/image/baby.avif", title: "Baby Care" },
  { img: "../../images/image/bath.avif", title: "Bath, Body, and Hair" },
  { img: "../../images/image/beauty.avif", title: "Beauty and Grooming" },
  { img: "../../images/image/cereal.avif", title: "Cereal and Breakfast" },
  { img: "../../images/image/cleaning.avif", title: "Cleaning Essential" },
  { img: "../../images/image/home.avif", title: "Home and Kitchen" },
  { img: "../../images/image/hygiene.avif", title: "Hygiene and Wellness" },
  { img: "../../images/image/instantfood.avif", title: "Instant and Frozen Food" },
  { img: "../../images/image/office.avif", title: "Office and Electricals" },
  { img: "../../images/image/paan.avif", title: "Paan Corner" },
  { img: "../../images/image/sauces.avif", title: "Sauces and Spread" },
  { img: "../../images/image/tea.avif", title: "Tea, Coffee, and More" },
  { img: "../../images/image/pet.avif", title: "Pet Supplies" },
  { img: "../../images/image/biscuits.avif", title: "Biscuits and Cakes" },
];

const Instamart = () => {
  return (
    <div>
      {/* Top Menu */}
      <div className="top_menu">
        <div className="login_circle">
          <i className="fa fa-user" aria-hidden="true"></i>
        </div>
        <i className="fa fa-search" aria-hidden="true"></i>
        <input type="search" placeholder="Search for 'diapers'" />
      </div>

      {/* Shop by Category */}
      <div className="shop">
        <h3>SHOP BY CATEGORY</h3>
      </div>
      <div className="line"></div>
      <br />

      {/* Categories */}
      <div className="items">
        {categories.map((category, index) => (
          <div className="box" key={index}>
            <img src={category.img} alt={category.title} />
            <h2>{category.title}</h2>
          </div>
        ))}
      </div>

      {/* Footer
      <div className="footer">
        <img src="../../image/App_download_banner.avif" alt="Download App" />
        <img
          className="footer_logo"
          src="../../image/swiggy_name.avif"
          alt="Swiggy"
          style={{ width: "30vh" }}
        />
        <br />
        <div className="container">
          <div className="footer_list1">
            <h3>Categories</h3>
            <ul>
              <li>Office</li>
              <li>Office in Delhi</li>
              <li>Office in Mumbai</li>
              <li>Office in Kolkata</li>
              <li>Dairy, Bread, and Eggs</li>
              <li>Office and Electricals</li>
              <li>Beauty and Grooming</li>
            </ul>
          </div>
          <div className="footer_list2">
            <h3>We deliver to</h3>
            <ul>
              <li>Bangalore</li>
              <li>Delhi</li>
              <li>Mumbai</li>
              <li>Kolkata</li>
              <li>Jaipur</li>
              <li>Pune</li>
              <li>Kochi</li>
            </ul>
          </div>
          <div className="footer_list3">
            <h3>Company</h3>
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Team</li>
              <li>Swiggy Genie</li>
              <li>Swiggy One</li>
            </ul>
          </div>
        </div>
        <div className="icons">
          <i className="fa fa-person"></i>
          <i className="fa fa-shopping-cart"></i>
          <i className="fa fa-tags"></i>
          <i className="fa fa-user"></i>
        </div>
      </div> */}
    </div>
  );
};

export default Instamart;
