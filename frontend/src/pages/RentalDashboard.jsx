import React, { useState } from 'react';
import { Home, User, Search, MapPin, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Expanded Rental Data with 20 Properties

// import {rentalData} from '../assets/temp'
const fetchCoordinates = async (address) => {
  const apiKey = process.env.MAPS_API_QUICKPOSITION;
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )}&key=${apiKey}`
  );
  const data = await response.json();
  if (data.results && data.results.length > 0) {
    const { lat, lng } = data.results[0].geometry.location;
    setLocation({ lat, lng });
  } else {
    console.error("Location not found");
  }
};


const rentalData = [
  {
    id: 1,
    title: "Shanti Villa",
    location: "Delhi, DL",
    category: "Boys",
    contact: "+91 9876543210",
    price: "₹2,500/month",
    image: "/api/placeholder/300/200"
  },
  {
    id: 2,
    title: "Narmada Residency",
    location: "Mumbai, MH",
    category: "Girls",
    contact: "+91 9123456789",
    price: "₹3,200/month",
    image: "/api/placeholder/300/200"
  },
  {
    id: 3,
    title: "Ganga Kunj",
    location: "Kolkata, WB",
    category: "Boys",
    contact: "+91 9898989898",
    price: "₹1,800/month",
    image: "/api/placeholder/300/200"
  },
  {
    id: 4,
    title: "Yamuna Heights",
    location: "Chennai, TN",
    category: "Girls",
    contact: "+91 9871234567",
    price: "₹3,000/month",
    image: "/api/placeholder/300/200"
  },
  {
    id: 5,
    title: "Nilgiri Mansion",
    location: "Bangalore, KA",
    category: "Boys",
    contact: "+91 9765432109",
    price: "₹3,500/month",
    image: "/api/placeholder/300/200"
  },
  {
    id: 6,
    title: "Himalaya Cottage",
    location: "Shimla, HP",
    category: "Girls",
    contact: "+91 9123412345",
    price: "₹2,800/month",
    image: "/api/placeholder/300/200"
  },
  {
    id: 7,
    title: "Vindhya Lodge",
    location: "Lucknow, UP",
    category: "Boys",
    contact: "+91 9198765432",
    price: "₹2,200/month",
    image: "/api/placeholder/300/200"
  },
  {
    id: 8,
    title: "Aravalli Residency",
    location: "Jaipur, RJ",
    category: "Girls",
    contact: "+91 9012345678",
    price: "₹3,000/month",
    image: "/api/placeholder/300/200"
  },
  {
    id: 9,
    title: "Satpura Enclave",
    location: "Bhopal, MP",
    category: "Boys",
    contact: "+91 9123458765",
    price: "₹2,100/month",
    image: "/api/placeholder/300/200"
  },
  {
    id: 10,
    title: "Godavari Inn",
    location: "Hyderabad, TG",
    category: "Girls",
    contact: "+91 9212345678",
    price: "₹3,400/month",
    image: "/api/placeholder/300/200"
  },
  {
    id: 11,
    title: "Krishna Palace",
    location: "Pune, MH",
    category: "Boys",
    contact: "+91 9123678901",
    price: "₹2,300/month",
    image: "/api/placeholder/300/200"
  },
  {
    id: 12,
    title: "Brahmaputra Apartments",
    location: "Guwahati, AS",
    category: "Girls",
    contact: "+91 9123987654",
    price: "₹3,200/month",
    image: "/api/placeholder/300/200"
  },
  {
    id: 13,
    title: "Kaveri Residency",
    location: "Mysore, KA",
    category: "Boys",
    contact: "+91 9112345678",
    price: "₹2,600/month",
    image: "/api/placeholder/300/200"
  },
  {
    id: 14,
    title: "Sabarmati Villa",
    location: "Ahmedabad, GJ",
    category: "Girls",
    contact: "+91 9123546789",
    price: "₹1,900/month",
    image: "/api/placeholder/300/200"
  },
  {
    id: 15,
    title: "Godavari Heights",
    location: "Nagpur, MH",
    category: "Boys",
    contact: "+91 9012345678",
    price: "₹2,800/month",
    image: "/api/placeholder/300/200"
  },
  {
    id: 16,
    title: "Cauvery Cottage",
    location: "Thiruvananthapuram, KL",
    category: "Girls",
    contact: "+91 9123456789",
    price: "₹2,000/month",
    image: "/api/placeholder/300/200"
  },
  {
    id: 17,
    title: "Vaigai Nest",
    location: "Madurai, TN",
    category: "Boys",
    contact: "+91 9176543210",
    price: "₹2,700/month",
    image: "/api/placeholder/300/200"
  },
  {
    id: 18,
    title: "Ravi Mansion",
    location: "Amritsar, PB",
    category: "Girls",
    contact: "+91 9123458765",
    price: "₹1,500/month",
    image: "/api/placeholder/300/200"
  },
  {
    id: 19,
    title: "Jhelum Heights",
    location: "Srinagar, JK",
    category: "Boys",
    contact: "+91 9012345678",
    price: "₹3,600/month",
    image: "/api/placeholder/300/200"
  },
  {
    id: 20,
    title: "Hooghly House",
    location: "Kolkata, WB",
    category: "Girls",
    contact: "+91 9123456789",
    price: "₹3,000/month",
    image: "/api/placeholder/300/200"
  }
];




const RentalCard = ({ rental }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border-2 border-purple-100">
    <img 
      src={rental.image} 
      alt={rental.title} 
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-lg font-bold mb-2 text-purple-800">{rental.title}</h3>
      <div className="flex items-center mb-2 text-purple-600">
        <MapPin className="mr-2 w-5 h-5" />
        <span>{rental.location}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">
          {rental.category}
        </span>
        <span className="font-semibold text-purple-700">{rental.price}</span>
      </div>
      <button className="mt-3 w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition-colors">
        Contact Owner
      </button>
    </div>
  </div>
);

// Main Dashboard Component
const RentalDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Filter rentals based on search term and category
  const filteredRentals = rentalData.filter(rental => 
    (searchTerm === '' || 
      rental.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rental.title.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (filterCategory === '' || rental.category === filterCategory)
  );

  // Get unique categories
  const categories = [...new Set(rentalData.map(rental => rental.category))];

  return (
    <div className="min-h-screen bg-purple-50">
      {/* Navbar */}
      <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <div className="flex items-center">
            <Home className="w-8 h-8 text-purple-600 mr-2" />
            <span className="text-2xl font-bold text-purple-800">Urban Nest</span>
          </div>
          
          {/* Search Bar */}
          <div className="flex-grow mx-4 relative">
            <input 
              type="text" 
              placeholder="Search locations or properties..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border rounded-full pl-10 focus:outline-none focus:ring-2 focus:ring-purple-500 border-purple-200"
            />
            <Search className="absolute left-3 top-3 text-purple-400" />
          </div>
          
          {/* Auth Buttons */}
          <div className="flex space-x-2">
            <button 
              className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition-colors flex items-center"
              onClick={() => navigate('/signin')} // Navigate to Sign In page
            >
              <User className="mr-2 w-5 h-5" /> Login
            </button>
            <button 
              className="bg-purple-700 text-white px-4 py-2 rounded-full hover:bg-purple-800 transition-colors"
              onClick={() => navigate('/signup')} // Navigate to Sign Up page
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-8 pt-24 mb-4">
        <div className="flex items-center space-x-4">
          <Filter className="text-purple-600" />
          <select 
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-4 py-2 border border-purple-200 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredRentals.map(rental => (
            <RentalCard key={rental.id} rental={rental} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RentalDashboard;