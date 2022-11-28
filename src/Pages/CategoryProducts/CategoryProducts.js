import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "./BookingModal";
import CategoryProductCard from "./CategoryProductCard";

const CategoryProducts = () => {
  const [bookingProduct, setBookingProduct] = useState(null);

  const products = useLoaderData();

  return (
    <div>
      <h2 className="text-4xl text-center text-neutral my-14">
        Available Products
      </h2>
      <div className="grid gap-20 mb-20 w-3/5 mx-auto">
        {products.map((product, i) => (
          <CategoryProductCard
            key={i}
            product={product}
            setBookingProduct={setBookingProduct}
          ></CategoryProductCard>
        ))}
      </div>
      {bookingProduct && <BookingModal setBookingProduct={setBookingProduct} bookingProduct={bookingProduct}></BookingModal>}
    </div>
  );
};

export default CategoryProducts;
