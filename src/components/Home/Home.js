import React from "react";
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
              <i class="fa-solid fa-truck-fast text-indigo-500"></i>
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
              <i class="fa-brands fa-redhat text-indigo-500"></i>
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
              <i class="fa-solid fa-credit-card text-indigo-500"></i>
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
              <i class="fa-solid fa-percent text-indigo-500"></i>
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
      </div>
    </div>
  );
};

export default Home;
