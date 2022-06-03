import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/review?email=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          console.log("res", res);
          if (res.status === 401 || res.status === 403) {
          }
          return res.json();
        })
        .then((data) => {
          setReviews(data);
        });
    }
  }, [user]);
  console.log(reviews);

  return (
    <div>
      <h1 className="text-2xl pb-2">
        Your Review : {reviews.length} - using JWT Token
      </h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Review</th>
              <th>Rating</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}

            {reviews.map((review, key) => (
              <tr key={key}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold">{review.email}</div>
                      <div className="text-sm opacity-50">Dhaka</div>
                    </div>
                  </div>
                </td>
                <td>{review.review}</td>
                <td>{review.rating}</td>
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

export default ReviewList;
