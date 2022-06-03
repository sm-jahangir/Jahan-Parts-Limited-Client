import React, { useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const makeAdmin = () => {
    fetch(`https://still-shore-53183.herokuapp.com/user/admin/${users.email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        //   toast.success(`Successfully made an admin`);
        alert("Successfully made an admin");
      });
  };

  fetch(`https://still-shore-53183.herokuapp.com/user`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  })
    .then((res) => {
      if (res.status === 401 || res.status === 403) {
        localStorage.removeItem("accessToken");
      }
      return res.json();
    })
    .then((data) => {
      setUsers(data);
    });

  return (
    <div className="w-5/6">
      <h2 className="text-2xl">All Users: {users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, key) => (
              <tr key={key}>
                <th>{key + 1}</th>
                <td>{user.email}</td>
                <td>
                  {user.role !== "admin" && (
                    <button onClick={makeAdmin} className="btn btn-xs">
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                  <button className="btn btn-xs">Remove User</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
