import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/product/${productId}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);

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
          <a href="/products" className="hover:text-gray-600 hover:underline">
            {product.category}
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
          <span>{product.name}</span>
        </div>
      </div>
      {/* <!-- ./ Breadcrumbs --> */}

      <div className="mx-auto mt-6 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="-mx-4 flex flex-col md:flex-row">
          <div className="px-4 md:flex-1">
            <img src={"/products/" + product.img} alt="hello" />
          </div>
          <div className="px-4 md:flex-1">
            <h2 className="mb-2 text-2xl font-bold leading-tight tracking-tight text-gray-800 md:text-3xl">
              {product.name}
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
                      {product.price}
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

            <p className="text-gray-500">{product.description}</p>

            <div className="flex py-4 space-x-4 justify-start items-center">
              <input
                type="number"
                min="10"
                max={500}
                placeholder="Enter min 10 maxium 500"
                className="input input-bordered w-full max-w-xs"
              />
              <Link
                to="/checkout"
                className="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
              >
                Buy Now
              </Link>
            </div>
            <div className="custom__according">
              <div className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-2">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl font-medium">
                  Most popular product in the world
                </div>
                <div className="collapse-content">
                  <p>
                    What is the most sold item in the world? The most sold item
                    in the world is clothing and fashion items.
                  </p>
                </div>
              </div>

              <div className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-2">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl font-medium">
                  What items sell the most?
                </div>
                <div className="collapse-content">
                  <p>
                    Fashion items. Interestingly, fashion is the top selling
                    industry in almost all of the world. Yes, despite the
                    industry being tricky and having products that come in sizes
                    that may vary from store to store, fashion remains the queen
                    of sales.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-2">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl font-medium">
                  What is a successful product?
                </div>
                <div className="collapse-content">
                  <p>
                    What is a successful product? Image result A successful
                    product is a product that exists in the market for a long
                    time. That is possible if the product adds value to the
                    user.
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

export default ProductDetails;
