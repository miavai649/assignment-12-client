import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import AllSellersCard from './AllSellersCard';

const AllSellers = () => {

    const [sellers, setSellers] = useState([])

    // const { data: sellers = [] } = useQuery({
    //     queryKey: ['sellers'],
    //     queryFn: async () => {
    //         const res = await fetch('http://localhost:5000/users/sellers')
    //         const data = await res.json()
    //         return data;
    //     }
    // })

    useEffect(() => {
        fetch('http://localhost:5000/users/sellers')
        .then(res => res.json())
        .then(data => setSellers(data))
    },[])
    
    const handleDelete = id => {
        const proceed = window.confirm('Do you want to delete this seller?')
        if (proceed) {
            fetch(`http://localhost:5000/users/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
                .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    toast.error('User Deleted')
                    const remaining = sellers.filter(buyer => buyer._id !== id)
                    setSellers(remaining)
                }
            })
        }
    }

    return (
        <div className='p-14'>
        <h2 className='text-3xl text-center mb-6 font-bold'>All Sellers: { sellers.length }</h2>
        <div className='grid gap-8'>
            {
               sellers.map(seller => <AllSellersCard key={seller._id} handleDelete={handleDelete} seller={seller}></AllSellersCard>)
            }
       </div>
    </div>
    );
};

export default AllSellers;