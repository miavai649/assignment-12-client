import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({category}) => {
    const { name, img, } = category;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <div className="card-actions">
      <Link to={`/${name}`}><button className="btn btn-primary">See All</button></Link>
      
    </div>
  </div>
</div>
  );
};

export default CategoryCard;
