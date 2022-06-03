import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { format } from "date-fns";

const MyReview = () => {
  const [user] = useAuthState(auth);
  const date = format(new Date(), "PP");

  return (
    <div className="w-5/6">
      <h1 className="text-4xl">My Review</h1>
      <form className="mt-5 w-full">
        <div class="grid grid-cols-2 gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Your Name</span>
            </label>
            <input
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
              type="text"
              value={user.email}
              placeholder="Type here"
              className="input input-bordered w-full mb-2"
              readOnly
            />
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Your Designation</span>
            </label>
            <input
              type="text"
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
              value={date}
              placeholder="Type here"
              className="input input-bordered w-full mb-2"
              readOnly
            />
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Select Rating</span>
            </label>
            <select class="select select-bordered mb-2">
              <option disabled selected>
                Pick your favorite Star
              </option>
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
            class="textarea textarea-bordered w-full mb-2"
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
    </div>
  );
};

export default MyReview;
