import React from "react";

const SingleProduct = () => {
  return (
    <div className="py-6">
      {/* <!-- Breadcrumbs --> */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 text-sm text-gray-400">
          <a href="/" className="hover:text-gray-600 hover:underline">
            Home
          </a>
          <span>
            <svg
              className="h-5 w-5 leading-none text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
          <a href="/" className="hover:text-gray-600 hover:underline">
            Electronics
          </a>
          <span>
            <svg
              className="h-5 w-5 leading-none text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
          <span>Headphones</span>
        </div>
      </div>
      {/* <!-- ./ Breadcrumbs --> */}

      <div className="mx-auto mt-6 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="-mx-4 flex flex-col md:flex-row">
          <div className="px-4 md:flex-1">
            <img src="https://via.placeholder.com/600x600" alt="hello" />
          </div>
          <div className="px-4 md:flex-1">
            <h2 className="mb-2 text-2xl font-bold leading-tight tracking-tight text-gray-800 md:text-3xl">
              Lorem ipsum dolor, sit amet consectetur, adipisicing elit.
            </h2>
            <p className="text-sm text-gray-500">
              By{" "}
              <a href="/" className="text-indigo-600 hover:underline">
                ABC Company
              </a>
            </p>

            <div className="flex items-center justify-between">
              <div className="my-4 flex items-center space-x-4">
                <div>
                  <div className="flex rounded-lg bg-gray-100 py-2 px-3">
                    <span className="mr-1 mt-1 text-indigo-400">$</span>
                    <span className="text-3xl font-bold text-indigo-600">
                      25
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-xl font-semibold text-green-500">
                    Save 12%
                  </p>
                  <p className="text-sm text-gray-400">
                    Inclusive of all Taxes.
                  </p>
                </div>
              </div>
              <div>
                <button className="focus:outline-none focus:shadow-none transition-all duration-300 rounded-full p-4 bg-transparent hover:bg-blue-50 text-light-blue-500 hover:bg-light-blue-50 hover:text-light-blue-700 hover:bg-light-blue-50 active:bg-light-blue-100">
                  <i className="fab fa-twitter undefined text-lg"></i>
                </button>
                <button className="focus:outline-none focus:shadow-none transition-all duration-300 rounded-full p-4 bg-transparent text-blue-500 hover:bg-blue-50 hover:text-blue-700 hover:bg-blue-50 active:bg-blue-100">
                  <i className="fab fa-facebook-f undefined text-lg"></i>
                </button>
                <button className="focus:outline-none focus:shadow-none transition-all duration-300 rounded-full p-4 bg-transparent text-pink-500 hover:bg-pink-50 hover:text-pink-700 hover:bg-pink-50 active:bg-pink-100">
                  <i className="fab fa-dribbble undefined text-lg"></i>
                </button>
              </div>
            </div>

            <p className="text-gray-500">
              Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Vitae
              exercitationem porro saepe ea harum corrupti vero id laudantium
              enim, libero blanditiis expedita cupiditate a est.
            </p>

            <div className="flex py-4 space-x-4 justify-start items-center">
              <input
                type="number"
                min={5}
                max={50}
                className="input input-bordered w-full max-w-xs"
              />
              <button
                type="button"
                className="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
              >
                Buy Now
              </button>
            </div>
            <div className="custom__according">
              <div className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-2">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl font-medium">
                  Our Order One
                </div>
                <div className="collapse-content">
                  <p>
                    tabindex="0" attribute is necessary to make the div
                    focusable
                  </p>
                </div>
              </div>

              <div className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-2">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl font-medium">
                  Our Order One
                </div>
                <div className="collapse-content">
                  <p>
                    tabindex="1" attribute is necessary to make the div
                    focusable
                  </p>
                </div>
              </div>
              <div className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-2">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl font-medium">
                  Our Order One
                </div>
                <div className="collapse-content">
                  <p>
                    tabindex="0" attribute is necessary to make the div
                    focusable
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
