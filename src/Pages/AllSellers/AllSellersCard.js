import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const AllSellersCard = ({seller}) => {

    const { image, email, role, name } = seller;

    return (
        <div className="card w-1/2 mx-auto card-side bg-base-100 shadow-xl">
      <figure>
        <img className="w-28 rounded-full ml-8" src={image} alt="Buyer" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: {name}</h2>
        <p>Email: {email}</p>
        <p>Role: <strong>{role}</strong></p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary"><FaTrashAlt></FaTrashAlt></button>
        </div>
      </div>
    </div>
    );
};

export default AllSellersCard;