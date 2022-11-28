import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const MyProductCard = ({product, handleDelete}) => {
    const { _id, photo, productName, location, year, user, resellPrice, originalPrice, description } = product;
 
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
            <button onClick={()=>handleDelete(_id)} className="btn btn-primary"><FaTrashAlt className='mr-3'></FaTrashAlt> Delete</button>
          </div>
        </div>
      </div>
    );
  };

export default MyProductCard;