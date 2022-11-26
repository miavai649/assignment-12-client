import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUsers = () => {

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users')
            const data = res.json()
            return data
        }
    })

    return (
        <div className="p-14">
        <h2 className="text-2xl font-bold mb-6">All Users: { users.length }</h2>
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
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>{user?.role !== 'Admin' ? <button className='btn btn-xs btn-primary'>Make Admin</button> : <kbd className="kbd kbd-sm">Admin</kbd>}</td>
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