import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import AllBuyersCard from './AllBuyersCard';

const AllBuyers = () => {

    const [buyers, setBuyers] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/users/buyers')
        .then(res => res.json())
        .then(data => setBuyers(data))
    },[])

    const handleDelete = id => {
        const proceed = window.confirm('Do you want to delete this buyer ?')
        if (proceed) {
            fetch(`http://localhost:5000/users/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
                .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    toast.error('User Deleted')
                    const remaining = buyers.filter(buyer => buyer._id !== id)
                    setBuyers(remaining)
                }
            })
        }
    }

    return (
        <div className='p-14'>
            <h2 className='text-3xl text-center mb-6 font-bold'>All Buyers: { buyers.length }</h2>
            <div className='grid gap-8'>
                {
                    buyers.map(buyer => <AllBuyersCard key={buyer._id} handleDelete={handleDelete} buyer={buyer}></AllBuyersCard>)
                }
           </div>
        </div>
    );
};

export default AllBuyers;