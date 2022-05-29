import React from "react";

const HomeSlider = () => {
  return (
    <div
      className=""
      style={{
        background: "url('slider/slider-1.webp')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="p-7">
        <div className="p-10 ml-5">
          <button className="btn btn-warning btn-xs">Weekend Discount</button>
          <h1 className="text-4xl font-light">The Features of Helth</h1>
          <h1 className="text-5xl font-bold">Shopping With Style</h1>
          <p className="py-6">
            Big screens in incredibly slim designs in your hand.Big screens in
            incredibly slim designs in your hand.
          </p>
          <button className="btn btn-outline btn-primary">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
