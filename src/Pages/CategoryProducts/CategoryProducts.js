import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryProductCard from './CategoryProductCard';

const CategoryProducts = () => {

    const products = useLoaderData();
    console.log(products)

    return (
        <div>
            <h2 className='text-4xl text-center text-neutral my-14'>Available Products</h2>
            <div className='grid gap-20 mb-20 w-3/5 mx-auto'>
                {
                    products.map((product, i) => <CategoryProductCard key={i} product={product}></CategoryProductCard>)
                }
            </div>
        </div>
    );
};

export default CategoryProducts;