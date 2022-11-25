import { useQuery } from '@tanstack/react-query';
import React from 'react';

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
        <div className='my-16'>
            <h2 className='text-4xl text-center font-bold'>Category: { categories.length }</h2>
            <div>
                
            </div>
        </div>
    );
};

export default Catagories;