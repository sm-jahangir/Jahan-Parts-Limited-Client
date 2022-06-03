import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import ReviewList from "./ReviewList/ReviewList";

const MyReview = () => {
  const [user] = useAuthState(auth);
  const date = format(new Date(), "PP");

  const { register, handleSubmit, watch } = useForm();
  const onSubmit = (data) => {
    const url = "http://localhost:5000/review";
    fetch(url, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className="w-5/6">
      <h1 className="text-4xl">My Review</h1>
      <form className="mt-5 w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Your Name</span>
            </label>
            <input
              {...register("name")}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full mb-2"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Your Email</span>
            </label>
            <input
              {...register("email")}
              type="text"
              value={user.email}
              placeholder="Type here"
              className="input input-bordered w-full mb-2"
              readOnly
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Your Designation</span>
            </label>
            <input
              type="text"
              {...register("designation")}
              placeholder="Type here"
              className="input input-bordered w-full mb-2"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Date</span>
            </label>
            <input
              type="text"
              {...register("date")}
              value={date}
              placeholder="Type here"
              className="input input-bordered w-full mb-2"
              readOnly
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Select Rating</span>
            </label>
            <select
              className="select select-bordered mb-2"
              {...register("rating")}
            >
              <option disabled>Pick your favorite Star</option>
              <option>1 Star</option>
              <option>2 Star</option>
              <option>3 Star</option>
              <option>4 Star</option>
              <option>5 Star</option>
            </select>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Your Profile URL</span>
            </label>
            <input
              type="text"
              {...register("photo")}
              placeholder="Type here"
              className="input input-bordered w-full mb-2"
            />
          </div>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-bold">Your Review Message</span>
          </label>
          <textarea
            {...register("review")}
            className="textarea textarea-bordered w-full mb-2"
            placeholder="Bio"
          ></textarea>
        </div>
        <div className="form-control w-full">
          <input
            type="submit"
            placeholder="Type here"
            className="w-full mb-2 btn"
            value="Add Review"
          />
        </div>
      </form>
      <div className="mt-32"></div>
      <ReviewList />
    </div>
  );
};

export default MyReview;
