import React from "react";

const CategoryProductCard = ({ product, setBookingProduct }) => {
  const { photo, productName, location, year, user, resellPrice, originalPrice, description } = product;
  return (
    <div className="card lg:card-side bg-secondary text-neutral shadow-xl">
      <figure>
        <img className="w-96 h-80" src={photo} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{productName}</h2>
        <div>
            <h3>Seller's Name: <strong>{user?.displayName}</strong></h3>
          <p>Location: {location}</p>
          <p>Resell Price: {resellPrice}</p>
          <p>Original Price: {originalPrice}</p>
          <p>Year of Use: {year}</p>
          <p>Description: {description}</p>
        </div>
        <div className="card-actions justify-end">
          <label htmlFor="booking-modal" onClick={() => setBookingProduct(product)} className="btn btn-primary">
          Book Now
      </label>

        </div>
      </div>
    </div>
  );
};

export default CategoryProductCard;
