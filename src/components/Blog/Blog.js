import React from "react";
import Loading from "../Shared/Loading";

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
      <section class="blog text-gray-700 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Recent Articles
            </h1>
          </div>
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div class="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
              <div
                class="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center"
                style={{
                  background:
                    "url('https://images.unsplash.com/photo-1521185496955-15097b20c5fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80')",
                }}
              ></div>

              <div class=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
                <div class="header-content inline-flex ">
                  <div class="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-purple-100">
                    <div class="h-2 w-2 rounded-full m-1 bg-purple-500 "></div>
                  </div>
                  <div class="category-title flex-1 text-sm"> PHP</div>
                </div>
                <div class="title-post font-medium">Mon titre</div>

                <div class="summary-post text-base text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis veritatis vel suscipit ex dolore possimus iure.
                  <button class="bg-blue-100 text-blue-500 mt-4 block rounded p-2 text-sm ">
                    <span class="">Lire plus</span>
                  </button>
                </div>
              </div>
            </div>

            <div class="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
              <div
                class="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center"
                style={{
                  background:
                    "url('https://images.unsplash.com/photo-1543966888-7c1dc482a810?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80')",
                }}
              ></div>

              <div class=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
                <div class="header-content inline-flex ">
                  <div class="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-yellow-100">
                    <div class="h-2 w-2 rounded-full m-1 bg-yellow-500 "></div>
                  </div>
                  <div class="category-title flex-1 text-sm"> JS</div>
                </div>
                <div class="title-post font-medium">Mon titre</div>

                <div class="summary-post text-base text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis veritatis vel suscipit ex dolore possimus iure.
                  <button class="bg-blue-100 text-blue-500 px-2 mt-4 block rounded p-2 text-sm">
                    <span class="">Lire plus</span>
                  </button>
                </div>
              </div>
            </div>

            <div class="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
              <div
                class="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center"
                style={{
                  background:
                    "url('https://images.unsplash.com/photo-1590608897129-79da98d15969?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80')",
                }}
              ></div>

              <div class=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
                <div class="header-content inline-flex ">
                  <div class="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-green-100">
                    <div class="h-2 w-2 rounded-full m-1 bg-green-500 "></div>
                  </div>
                  <div class="category-title flex-1 text-sm"> Vue</div>
                </div>
                <div class="title-post font-medium">Mon titre</div>

                <div class="summary-post text-base text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis veritatis vel suscipit ex dolore possimus iure.
                  <button class="bg-blue-100 text-blue-500 px-2 mt-4 block rounded p-2 text-sm">
                    <span class="">Lire plus</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
