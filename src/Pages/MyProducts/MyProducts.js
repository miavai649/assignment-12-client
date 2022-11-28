import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import Loading from '../../components/Loading/Loading';
import { AuthContext } from '../../Context/AuthContext';
import MyProductCard from './MyProductCard';

const MyProducts = () => {
    const { user } = useContext(AuthContext)


    const { data: myProducts = [], isLoading, refetch } = useQuery({
        queryKey: ['myProducts', 'email'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myProducts/${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data;
        }
    })

    const handleDelete = id => {
        fetch(`http://localhost:5000/myProduct/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
            .then(data => {
            if (data.deletedCount > 0) {
              refetch()  
              toast.success('Product deleted successfully')
            }
        })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='p-14'>
            <h2 className='text-4xl text-center mb-6'>My products: { myProducts.length }</h2>
            <div className='grid gap-8'>
                {
                    myProducts.map(product => <MyProductCard key={product._id} handleDelete={handleDelete} product={product}></MyProductCard>)
                }
         </div>
        </div>
    );
};

export default MyProducts;