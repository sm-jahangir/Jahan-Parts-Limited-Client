import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/order?email=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          console.log("res", res);
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }
          return res.json();
        })
        .then((data) => {
          setOrders(data);
        });
    }
  }, [user]);
  return (
    <div className="w-5/6">
      <h1 className="text-2xl pb-2">
        Your Review : {orders.length} - using JWT Token
      </h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Product Name</th>
              <th>quantity</th>
              <th>email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}

            {orders.map((order, key) => (
              <tr key={key}>
                <td>{order.firstName}</td>
                <td>{order.name}</td>
                <td>{order.quantity}</td>
                <td>{order.email}</td>
                <td>{order.phone}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">Delete</button>
                </th>
              </tr>
            ))}
          </tbody>
          {/* <!-- foot --> */}
        </table>
      </div>
    </div>
  );
};

export default Orders;
