import React from "react";
import Loading from "../Shared/Loading";
import LatestBlog from "./LatestBlog";

const Blog = () => {
  return (
    <div className="custom__container">
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-5">
        <div className=" w-full lg:max-w-full lg:flex">
          <div
            className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            style={{
              background:
                "url('https://api.lorem.space/image/movie?w=260&h=400')",
            }}
            title="Mountain"
          ></div>
          <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <p className="text-sm text-gray-600 flex items-center">
                <svg
                  className="fill-current text-gray-500 w-3 h-3 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                </svg>
                Programming Tutorial
              </p>
              <div className="text-gray-900 font-bold text-xl mb-2">
                Best Mountain Trails 2020
              </div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src="/avatar.png"
                alt="Avatar of Writer"
              />
              <div className="text-sm">
                <p className="text-gray-900 leading-none">John Smith</p>
                <p className="text-gray-600">Aug 18</p>
              </div>
              <button className="btn btn-wide btn-sm ml-10">
                Read More...
              </button>
            </div>
          </div>
        </div>
        <div className="w-full lg:max-w-full lg:flex">
          <div
            className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            style={{
              background:
                "url('https://api.lorem.space/image/movie?w=260&h=400')",
            }}
            title="River"
          ></div>
          <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <div className="text-gray-900 font-bold text-xl mb-2">
                15 Rivers In Norway
              </div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src="/avatar.png"
                alt="Avatar of Writer"
              />
              <div className="text-sm">
                <p className="text-gray-900 leading-none">Karen Johnson</p>
                <p className="text-gray-600">Aug 10</p>
              </div>
              <button className="btn btn-wide btn-sm ml-10">
                Read More...
              </button>
            </div>
          </div>
        </div>
        <div className="w-full lg:max-w-full lg:flex">
          <div
            className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            style={{
              background:
                "url('https://api.lorem.space/image/movie?w=260&h=400')",
            }}
            title="Forest"
          ></div>
          <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <p className="text-sm text-gray-600 flex items-center">
                <svg
                  className="fill-current text-gray-500 w-3 h-3 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                </svg>
                Programming Tutorial
              </p>
              <div className="text-gray-900 font-bold text-xl mb-2">
                5 National Forests across the U.S.
              </div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src="/avatar.png"
                alt="Avatar of Writer"
              />
              <div className="text-sm">
                <p className="text-gray-900 leading-none">Rafael Martin</p>
                <p className="text-gray-600">Aug 9</p>
              </div>
              <button className="btn btn-wide btn-sm ml-10">
                Read More...
              </button>
            </div>
          </div>
        </div>
      </div>
      <Loading />
      <div className="flex justify-center pt-10">
        <div className="btn-group">
          <button className="btn btn-active">1</button>
          <button className="btn">2</button>
          <button className="btn">3</button>
          <button className="btn">4</button>
        </div>
      </div>
      <LatestBlog />
    </div>
  );
};

export default Blog;
