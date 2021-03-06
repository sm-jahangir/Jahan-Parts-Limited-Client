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
                Programming Tutorial
              </p>
              <div className="text-gray-900 font-bold text-xl mb-2">
                How will you improve the performance of a React Application?
              </div>
              <p className="text-gray-700 text-base">
                1.Keeping component state local where necessary. 2.Memoizing
                React components to prevent unnecessary re-renders.
                3.Code-splitting in React using dynamic import(). 4.Windowing or
                list virtualization in React. 5.Lazy loading images in React.
              </p>
            </div>
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src="/avatar.png"
                alt="Avatar of Writer"
              />
              <div className="text-sm">
                <p className="text-gray-900 leading-none text-xs lg:text-base">
                  John Smith
                </p>
                <p className="text-gray-600 text-xs lg:text-base">Aug 18</p>
              </div>
              <button className="btn btn-sm lg:btn-wide btn-sm ml-5 lg:ml-10">
                Read More
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
                What are the different ways to manage a state in a React
                application?
              </div>
              <p className="text-gray-700 text-base">
                1.Local state. 2.Global state. 3.Server state. 4.URL state.
              </p>
            </div>
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src="/avatar.png"
                alt="Avatar of Writer"
              />
              <div className="text-sm">
                <p className="text-gray-900 leading-none text-xs lg:text-base">
                  Karen Johnson
                </p>
                <p className="text-gray-600 text-xs lg:text-base">Aug 10</p>
              </div>
              <button className="btn btn-sm lg:btn-wide btn-sm ml-5 lg:ml-10">
                Read More
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
                How does prototypical inheritance work?
              </div>
              <p className="text-gray-700 text-base">
                The Prototypal Inheritance is a feature in javascript used to
                add methods and properties in objects. It is a method by which
                an object can inherit the properties and methods of another
                object.
              </p>
            </div>
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src="/avatar.png"
                alt="Avatar of Writer"
              />
              <div className="text-sm">
                <p className="text-gray-900 leading-none text-xs lg:text-base">
                  Rafael Martin
                </p>
                <p className="text-gray-600 text-xs lg:text-base">Aug 9</p>
              </div>
              <button className="btn btn-sm lg:btn-wide btn-sm ml-5 lg:ml-10">
                Read More
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
                Programming Tutorial
              </p>
              <div className="text-gray-900 font-bold text-xl mb-2">
                What is a unit test? Why should write unit tests?
              </div>
              <p className="text-gray-700 text-base">
                Unit tests are typically automated tests written and run by
                software developers to ensure that a section of an application
                meets its design and behaves as intended. In procedural
                programming, a unit could be an entire module, but it is more
                commonly an individual function or procedure.
              </p>
            </div>
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src="/avatar.png"
                alt="Avatar of Writer"
              />
              <div className="text-sm">
                <p className="text-gray-900 leading-none text-xs lg:text-base">
                  Rafael Martin
                </p>
                <p className="text-gray-600 text-xs lg:text-base">Aug 9</p>
              </div>
              <button className="btn btn-sm lg:btn-wide btn-sm ml-5 lg:ml-10">
                Read More
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
                Programming Tutorial
              </p>
              <div className="text-gray-900 font-bold text-xl mb-2">
                Why you do not set the state directly in React?
              </div>
              <p className="text-gray-700 text-base">
                One should never update the state directly because of the
                following reasons: If you update it directly, calling the
                setState() afterward may just replace the update you made. When
                you directly update the state, it does not change this.state
                immediately. Instead, it creates a pending state transition, and
                accessing it after calling this method will only return the
                present value. You will lose control of the state across all
                components.
              </p>
            </div>
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src="/avatar.png"
                alt="Avatar of Writer"
              />
              <div className="text-sm">
                <p className="text-gray-900 leading-none text-xs lg:text-base">
                  Rafael Martin
                </p>
                <p className="text-gray-600 text-xs lg:text-base">Aug 9</p>
              </div>
              <button className="btn btn-sm lg:btn-wide btn-sm ml-5 lg:ml-10">
                Read More
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
