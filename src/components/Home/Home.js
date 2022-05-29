import React from "react";
import Products from "../Products/Products";
import "./Home.css";
import HomeSlider from "./HomeSlider";

const Home = () => {
  return (
    <div>
      <HomeSlider />
      <div className="home">
        {/* Banner Bottom Start */}
        <div className="banner__bottom__wrapper flex py-10 justify-between">
          <div className="flex">
            <span className="text-4xl">
              <i className="fa-solid fa-truck-fast text-indigo-500"></i>
            </span>
            <div className="ml-2">
              <h5 className="text-xl">Free Delivery</h5>
              <p className="text-sm text-slate-500">
                Free shipping on all order
              </p>
            </div>
          </div>
          <div className="flex">
            <span className="text-4xl">
              <i className="fa-brands fa-redhat text-indigo-500"></i>
            </span>
            <div className="ml-2">
              <h5 className="text-xl">Online Support 24/7</h5>
              <p className="text-sm text-slate-500">
                Support online 24 hours a day
              </p>
            </div>
          </div>
          <div className="flex">
            <span className="text-4xl">
              <i className="fa-solid fa-credit-card text-indigo-500"></i>
            </span>
            <div className="ml-2">
              <h5 className="text-xl">Money Return</h5>
              <p className="text-sm text-slate-500">
                Back guarantee under 7 days
              </p>
            </div>
          </div>
          <div className="flex">
            <span className="text-4xl">
              <i className="fa-solid fa-percent text-indigo-500"></i>
            </span>
            <div className="ml-2">
              <h5 className="text-xl">Member Discount</h5>
              <p className="text-sm text-slate-500">
                Onevery order over $120.00
              </p>
            </div>
          </div>
        </div>
        {/* Banner Bottom END */}
        {/* Category By Banner Start */}
        <div className="category__by__banner">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div
              className=""
              style={{
                background: "url('banner/banner-7.webp')",
                backgroundPosition: "center",
              }}
            >
              <div className="flex-row justify-between p-5">
                <span>
                  <p>Maecenas non erat</p>
                  <h4 className="text-2xl font-bold mb-12">Pro Scooter</h4>
                </span>
                <span>
                  <p className="text-zinc-500">Weekend Discount</p>
                  <h2 className="text-3xl text-red-500">$299.00</h2>
                </span>
              </div>
            </div>
            <div
              className=""
              style={{
                background: "url('banner/banner-9.webp')",
                backgroundPosition: "center",
              }}
            >
              <div className="flex-row justify-between p-5">
                <span>
                  <p>Maecenas non erat</p>
                  <h4 className="text-2xl font-bold mb-12">Home Speakers</h4>
                </span>
                <span>
                  <p className="text-zinc-500">Weekend Discount</p>
                  <h2 className="text-3xl text-red-500">$299.00</h2>
                </span>
              </div>
            </div>
            <div
              className=""
              style={{
                background: "url('banner/banner-8.webp')",
                backgroundPosition: "center",
              }}
            >
              <div className="flex-row justify-between p-5">
                <span>
                  <p>Maecenas non erat</p>
                  <h4 className="text-2xl font-bold mb-12">Computers</h4>
                </span>
                <span>
                  <p className="text-zinc-500">Weekend Discount</p>
                  <h2 className="text-3xl text-red-500">$299.00</h2>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Category By Banner End */}

        {/* Best Seller Product Start */}
        <div className="best__product__wrapper">
          <div className="header__title">
            <div className="flex justify-between">
              <div className="flex items-center gap-5">
                <h3 className="text-3xl font-bold">Best Sellers</h3>
                <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-2xl">
                      <span style={{ "--value": "15" }}></span>
                    </span>
                    days
                  </div>
                  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-2xl">
                      <span style={{ "--value": "15" }}></span>
                    </span>
                    hours
                  </div>
                  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-2xl">
                      <span style={{ "--value": "15" }}></span>
                    </span>
                    min
                  </div>
                  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-2xl">
                      <span style={{ "--value": "15" }}></span>
                    </span>
                    sec
                  </div>
                </div>
              </div>
              <div>
                <a className=" font-bold" href="/">
                  View All
                  <i className="fa-solid fa-right-long"></i>
                </a>
              </div>
            </div>
          </div>
          <hr />
          <Products />
        </div>
        {/* Best Seller Product End */}
        {/* Action Card Start */}

        <div className="p-4 w-full text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
            Work fast from anywhere
          </h5>
          <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
            Stay up to date and move work forward with Flowbite on iOS &amp;
            Android. Download the app today.
          </p>
          <div className="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <a
              href="/"
              className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            >
              <svg
                className="mr-3 w-7 h-7"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="apple"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                ></path>
              </svg>
              <div className="text-left">
                <div className="mb-1 text-xs">Download on the</div>
                <div className="-mt-1 font-sans text-sm font-semibold">
                  Mac App Store
                </div>
              </div>
            </a>
            <a
              href="/"
              className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            >
              <svg
                className="mr-3 w-7 h-7"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="google-play"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
                ></path>
              </svg>
              <div className="text-left">
                <div className="mb-1 text-xs">Get in on</div>
                <div className="-mt-1 font-sans text-sm font-semibold">
                  Google Play
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Action Card End */}
        {/* Our Experts Team Start */}
        <div
          style={{ backgroundColor: "rgba(0, 0, 0, 0)", marginTop: "100px" }}
        >
          <h1 className="text-center text-5xl font-bold pb-5">
            Our Experts Team
          </h1>
          <hr className="w-2/4 m-auto" />
          <div
            className="container max-w-7xl mx-auto px-4"
            style={{ cursor: "auto" }}
          >
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="John Doe"
                    src="https://dummyimage.com/300"
                    className="rounded-xl shadow-lg max-w-full h-auto align-middle border-none undefined"
                  />
                  <div className="pt-6 text-center">
                    <h1 className="text-gray-900 text-xl font-serif font-bold leading-normal mt-0 mb-2">
                      John Doe
                    </h1>
                    <p className="text-blue-gray-700 text-base font-light leading-relaxed mt-0 mb-4">
                      CEO
                    </p>
                    <div className="flex items-center justify-center">
                      <button className="false flex items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-10 h-10 p-0 grid place-items-center text-xs leading-normal bg-transparent text-light-blue-500 hover:bg-light-blue-50 hover:text-light-blue-700 hover:bg-light-blue-50 active:bg-light-blue-100 undefined">
                        <i className="fab fa-twitter undefined text-lg"></i>
                      </button>
                      <button className="false flex items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-10 h-10 p-0 grid place-items-center text-xs leading-normal bg-transparent text-blue-500 hover:bg-blue-50 hover:text-blue-700 hover:bg-blue-50 active:bg-blue-100 undefined">
                        <i className="fab fa-facebook-f undefined text-lg"></i>
                      </button>
                      <button className="false flex items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-10 h-10 p-0 grid place-items-center text-xs leading-normal bg-transparent text-pink-500 hover:bg-pink-50 hover:text-pink-700 hover:bg-pink-50 active:bg-pink-100 undefined">
                        <i className="fab fa-dribbble undefined text-lg"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4"
                style={{ cursor: "auto" }}
              >
                <div className="px-6" style={{ cursor: "auto" }}>
                  <img
                    alt="Jack Wales"
                    src="https://dummyimage.com/300"
                    className="rounded-xl shadow-lg max-w-full h-auto align-middle border-none undefined"
                    style={{ cursor: "auto" }}
                  />
                  <div className="pt-6 text-center">
                    <h1 className="text-gray-900 text-xl font-serif font-bold leading-normal mt-0 mb-2">
                      Jack Wales
                    </h1>
                    <p className="text-blue-gray-700 text-base font-light leading-relaxed mt-0 mb-4">
                      CMO
                    </p>
                    <div className="flex items-center justify-center">
                      <button className="false flex items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-10 h-10 p-0 grid place-items-center text-xs leading-normal bg-transparent text-light-blue-500 hover:bg-light-blue-50 hover:text-light-blue-700 hover:bg-light-blue-50 active:bg-light-blue-100 undefined">
                        <i className="fab fa-twitter undefined text-lg"></i>
                      </button>
                      <button className="false flex items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-10 h-10 p-0 grid place-items-center text-xs leading-normal bg-transparent text-blue-500 hover:bg-blue-50 hover:text-blue-700 hover:bg-blue-50 active:bg-blue-100 undefined">
                        <i className="fab fa-facebook-f undefined text-lg"></i>
                      </button>
                      <button className="false flex items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-10 h-10 p-0 grid place-items-center text-xs leading-normal bg-transparent text-pink-500 hover:bg-pink-50 hover:text-pink-700 hover:bg-pink-50 active:bg-pink-100 undefined">
                        <i className="fab fa-dribbble undefined text-lg"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4"
                style={{ cursor: "auto" }}
              >
                <div className="px-6" style={{ cursor: "auto" }}>
                  <img
                    alt="George Hoyt"
                    src="https://dummyimage.com/300"
                    className="rounded-xl shadow-lg max-w-full h-auto align-middle border-none undefined"
                    style={{ cursor: "auto" }}
                  />
                  <div className="pt-6 text-center">
                    <h1 className="text-gray-900 text-xl font-serif font-bold leading-normal mt-0 mb-2">
                      George Hoyt
                    </h1>
                    <p className="text-blue-gray-700 text-base font-light leading-relaxed mt-0 mb-4">
                      Software Engineer
                    </p>
                    <div className="flex items-center justify-center">
                      <button className="false flex items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-10 h-10 p-0 grid place-items-center text-xs leading-normal bg-transparent text-light-blue-500 hover:bg-light-blue-50 hover:text-light-blue-700 hover:bg-light-blue-50 active:bg-light-blue-100 undefined">
                        <i className="fab fa-twitter undefined text-lg"></i>
                      </button>
                      <button className="false flex items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-10 h-10 p-0 grid place-items-center text-xs leading-normal bg-transparent text-blue-500 hover:bg-blue-50 hover:text-blue-700 hover:bg-blue-50 active:bg-blue-100 undefined">
                        <i className="fab fa-facebook-f undefined text-lg"></i>
                      </button>
                      <button className="false flex items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-10 h-10 p-0 grid place-items-center text-xs leading-normal bg-transparent text-pink-500 hover:bg-pink-50 hover:text-pink-700 hover:bg-pink-50 active:bg-pink-100 undefined">
                        <i className="fab fa-dribbble undefined text-lg"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="Jenna Kardi"
                    src="https://dummyimage.com/300"
                    className="rounded-xl shadow-lg max-w-full h-auto align-middle border-none undefined"
                  />
                  <div className="pt-6 text-center">
                    <h1 className="text-gray-900 text-xl font-serif font-bold leading-normal mt-0 mb-2">
                      Isabella Bolt
                    </h1>
                    <p className="text-blue-gray-700 text-base font-light leading-relaxed mt-0 mb-4">
                      Human Resources
                    </p>
                    <div className="flex items-center justify-center">
                      <button className="false flex items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-10 h-10 p-0 grid place-items-center text-xs leading-normal bg-transparent text-light-blue-500 hover:bg-light-blue-50 hover:text-light-blue-700 hover:bg-light-blue-50 active:bg-light-blue-100 undefined">
                        <i className="fab fa-twitter undefined text-lg"></i>
                      </button>
                      <button className="false flex items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-10 h-10 p-0 grid place-items-center text-xs leading-normal bg-transparent text-blue-500 hover:bg-blue-50 hover:text-blue-700 hover:bg-blue-50 active:bg-blue-100 undefined">
                        <i className="fab fa-facebook-f undefined text-lg"></i>
                      </button>
                      <button className="false flex items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-10 h-10 p-0 grid place-items-center text-xs leading-normal bg-transparent text-pink-500 hover:bg-pink-50 hover:text-pink-700 hover:bg-pink-50 active:bg-pink-100 undefined">
                        <i className="fab fa-dribbble undefined text-lg"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Our Experts Team End */}
      </div>
    </div>
  );
};

export default Home;
