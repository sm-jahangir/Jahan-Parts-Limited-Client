import React from "react";
import "./Home.css";
import HomeSlider from "./HomeSlider";

const Home = () => {
  return (
    <div>
      <HomeSlider />
      <div className="home">
        <h1 className="text-5xl">Home</h1>
      </div>
    </div>
  );
};

export default Home;
