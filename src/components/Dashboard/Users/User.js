import React, { useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  fetch(`http://localhost:5000/user`, {
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
              <th>Favorite Framework</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, key) => (
              <tr key={key}>
                <th>{key + 1}</th>
                <td>{user.email}</td>
                <td>React</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
