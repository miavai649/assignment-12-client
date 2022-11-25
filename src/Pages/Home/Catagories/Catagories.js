import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CategoryCard from './CategoryCard';

const Catagories = () => {

    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/catagories')
            const data = res.json()
            return data
        }
   })

    return (
        <div className='my-16 container mx-auto'>
            <h2 className='text-4xl text-center mb-7 font-bold'>Category</h2>
            <div className='grid gap-9 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    categories.map(category => <CategoryCard key={category._id} category={category}></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default Catagories;