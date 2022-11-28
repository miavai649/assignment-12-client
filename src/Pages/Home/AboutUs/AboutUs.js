import React from 'react';
import image from "../../../assets/images/about/about.jpg";

const AboutUs = () => {
    return (
        <div>
      <div className="hero my-16 bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={image} alt="" className="w-3/5 rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-4xl font-bold">
              About Us 
            </h1>
            <p className="py-6">
              This is our Fantastic Furniture website where you can buy or sell your well furnished products and you can discover our products for every space, style and budget. People can buy and sell best quality of product in the perfect reasonable price. For every person, they can easily comfortable to this website because, It's very handy and classy for all of them. So, you can experience a wonderful products from us and feels like a winner
            </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default AboutUs;