import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import Loading from "../../components/Loading/Loading";
import { AuthContext } from "../../Context/AuthContext";

const MyOrders = () => {
  const { user } = useContext(AuthContext);

  const { data: myorders = [], isLoading } = useQuery({
    queryKey: ["myorders", "email"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/myorders/${user?.email}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`
        }
      });
      const data = await res.json();
      return data;
    }
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="p-14">
      <h2 className="text-4xl text-center mb-6">My Orders {myorders.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {myorders.map((myorder, i) => (
              <tr key={myorder._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-24 rounded-xl">
                      <img src={myorder.image} alt="" />
                    </div>
                  </div>
                </td>
                <td>{myorder.productName}</td>
                <td>{myorder.price}</td>
                <td>
                  <button className="btn btn-primary btn-sm">Pay</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
