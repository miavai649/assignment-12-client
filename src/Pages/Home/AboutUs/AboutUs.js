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
              This is a place where you get a wide choice of rich delicious cakes for all occasions. My aim to serve the most creative and mouth-watering cakes, to help celebrate your events ina special way! Pick a design you like, and then choose from delectable flavours. You can then sit back and relax & expect a wonderful cake to arrive at your desired location, on your chosen date and time
            </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default AboutUs;