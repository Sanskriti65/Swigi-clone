import React,{useState} from 'react';
import './BestPlacesSection.css';

const BestPlacesSection=()=>{
const cities = [
 
  
"Order food online in Bangalore",
"Order food online in Gurgaon",
"Order food online in Hyderabad",
"Order food online in Delhi",
"Order food online in Mumbai",
"Order food online in Pune",
"Order food online in Kolkata",
"Order food online in Chennai",
"Order food online in Ahmedabad",
"Order food online in Chandigarh",
"Order food online in Jaipur",
"Order food online in Kochi",
"Order food online in Coimbatore",
"Order food online in Lucknow",
"Order food online in Nagpur",
"Order food online in Vadodara",
"Order food online in Indore",
"Order food online in Guwahati",
"Order food online in Vizag",
"Order food online in Surat",
"Order food online in Dehradun",
"Order food online in Noida",
"Order food online in Ludhiana",
"Order food online in Trichy",
"Order food online in Vijayawada",
"Order food online in Kanpur",
"Order food online in Mysore",
"Order food online in Nashik",
"Order food online in Udaipur",
"Order food online in Pondicherry",
"Order food online in Agra",
"Order food online in Aurangabad",
"Order food online in Jalandhar",
"Order food online in Kota",
"Order food online in Madurai",
"Order food online in Allahabad",
"Order food online in Manipal",
"Order food online in Amritsar",
"Order food online in Bareilly",
"Order food online in Meerut",
"Order food online in Bhopal",
"Order food online in Ooty",
"Order food online in Bhubaneswar",
"Order food online in Raipur",
"Order food online in Bikaner",
"Order food online in Rajkot",
"Order food online in Kozhikode",
"Order food online in Central Goa",
"Order food online in Sirsa",
"Order food online in Gwalior",
"Order food online in Thrissur",
"Order food online in Kharagpur",
"Order food online in Tirupati",
"Order food online in Tirupur",
"Order food online in Vellore",
"Order food online in Thiruvananthapuram",
"Order food online in Warangal",
"Order food online in Varanasi",
"Order food online in Yamuna Nagar",
"Order food online in Bhagalpur",
"Order food online in Hapur",
"Order food online in Morena",
"Order food online in Hassan",
"Order food online in Hisar",
"Order food online in Godhra",
"Order food online in Kolar",
"Order food online in Rampur",
"Order food online in Sitapur",
"Order food online in Etawah",
"Order food online in Porbandar",
"Order food online in Nadiad",
"Order food online in Sagar",
"Order food online in Morbi",
"Order food online in Chhindwara",
"Order food online in Tumakuru",
"Order food online in Singrauli",
"Order food online in Thoothukudi",
"Order food online in Katni",
"Order food online in Khandwa",
"Order food online in Eluru",
"Order food online in Malappuram",
"Order food online in Dibrugarh",
"Order food online in Deoghar",
"Order food online in Khanna",
"Order food online in Bidar",
"Order food online in Anantnag",
"Order food online in Madikeri"
  
];
const [visibleCount,setVisibleCount]=useState(9);

const handleShow_more=()=>{
  setVisibleCount((prevCount)=>prevCount+4);
}

return(
  <div>
  <h2>Cities with food delivery</h2>

<div className='button-grid'>
  {cities.slice(0,visibleCount).map((item,index)=>
  <button key={index} className='city-button'>{item}</button>)}
  <button onClick={handleShow_more}>Show more</button>
</div>

</div>


)}
export default BestPlacesSection;

