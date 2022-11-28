import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-server-sigma.vercel.app/users')
            const data = res.json()
            return data
        }
    })

    const handleMakeAdmin = id => {
        fetch(`https://assignment-12-server-sigma.vercel.app/users/admin/${id}`, {
          method: 'PUT',
          headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
          }
        })
        .then(res => res.json())
            .then(data => {
            if (data.modifiedCount > 0) {
                toast.success('Make admin successfully')
                refetch()
              }
            else {
              toast.error(data.message)
              }
            })
    }

    return (
        <div className="p-14">
        <h2 className="text-3xl text-center font-bold mb-6">All Users: { users.length }</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Admin</th>
            </tr>
          </thead>
          <tbody>
            {
                users.map((user, i) => <tr key={user._id}>
                    <th>{i + 1}</th>
                    <td>{user?.name}</td>
                    <td>{user?.email}</td>
                    <td>{user?.role}</td>
                    <td>{user?.role !== 'Admin' ? <button onClick={()=>handleMakeAdmin(user?._id)} className='btn btn-xs btn-primary'>Make Admin</button> : <kbd className="kbd kbd-sm">Admin</kbd>}</td>
                  </tr>
                )
            }
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default AllUsers;