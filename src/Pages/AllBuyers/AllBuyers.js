import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AllBuyersCard from './AllBuyersCard';

const AllBuyers = () => {

    const { data: buyers = [] } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users/buyers')
            const data = await res.json()
            return data;
        }
    })

    return (
        <div className='p-14'>
            <h2 className='text-3xl text-center mb-6 font-bold'>All Buyers: { buyers.length }</h2>
            <div className='grid gap-8'>
                {
                    buyers.map(buyer => <AllBuyersCard key={buyer._id} buyer={buyer}></AllBuyersCard>)
                }
           </div>
        </div>
    );
};

export default AllBuyers;