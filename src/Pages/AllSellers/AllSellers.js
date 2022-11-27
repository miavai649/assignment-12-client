import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AllSellersCard from './AllSellersCard';

const AllSellers = () => {

    const { data: sellers = [] } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users/sellers')
            const data = await res.json()
            return data;
        }
    })

    return (
        <div className='p-14'>
        <h2 className='text-3xl text-center mb-6 font-bold'>All Buyers: { sellers.length }</h2>
        <div className='grid gap-8'>
            {
               sellers.map(seller => <AllSellersCard key={seller._id} seller={seller}></AllSellersCard>)
            }
       </div>
    </div>
    );
};

export default AllSellers;