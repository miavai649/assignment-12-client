import React from 'react';
import { FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import bannerImg from '../../../assets/images/banner/banner.jpg';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${bannerImg})` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Welcome to Fantastic Furniture</h1>
      <p className="mb-5 text-lg">Our Fantastic Furniture website for those people who wants to buy or sell their well home furnishings products and discover the most stylish, contemporary and chic furniture with a low price.</p>
      <Link to='/signup'><button className="btn btn-primary text-lg"><FaUserPlus className='mr-3'></FaUserPlus> Sign Up</button></Link>
    </div>
  </div>
</div>
    );
};

export default Banner;