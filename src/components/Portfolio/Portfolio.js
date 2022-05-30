import React from "react";
import { Link } from "react-router-dom";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <main className="font-sans bg-white">
      <div>
        <section className="bg-white mt-20">
          <div className="max-w-2xl px-6 text-center mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800">
              Hi,{" "}
              <span className="bg-indigo-600 text-white rounded px-1">
                I’m Jahangir Alam
              </span>{" "}
              . Nice to meet you.
            </h2>
            <p className="text-gray-600 mt-4">
              Results-oriented Web Application Developer and Online Business
              Developer with considerable training and enterprise experience in
              Web site design and layout and in all stages of design, coding,
              and testing of Web applications, and in the formation, planning,
              and implementation of online business ventures.
            </p>

            <div className="flex items-end justify-center mt-16">
              <img className="w-2/4" src="/jahangir.png" alt="Jahangir" />
            </div>
          </div>
        </section>

        <section className="bg-gray-800 pattern py-20">
          <div className="max-w-5xl px-6 mx-auto text-center">
            <h2 className="text-2xl font-semibold text-white">About Me</h2>

            <p className="text-gray-400 mt-4">
              Results-oriented Web Application Developer and Online Business
              Developer with considerable training and enterprise experience in
              Web site design and layout and in all stages of design, coding,
              and testing of Web applications, and in the formation, planning,
              and implementation of online business ventures.
            </p>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="max-w-5xl px-6 mx-auto text-center">
            <h2 className="text-2xl font-semibold text-gray-800">
              Latest Posts
            </h2>

            <div className="flex flex-col items-center justify-center mt-6">
              <a
                className="max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                href="/"
              >
                <div className="flex items-center justify-between px-4 py-2">
                  <h3 className="text-lg font-medium text-gray-700">
                    Easy, Free Laravel CI Using GitHub Actions
                  </h3>
                  <span className="block text-gray-600 font-light text-sm">
                    20 Jan 2022
                  </span>
                </div>
              </a>

              <a
                className="mt-8 max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                href="/"
              >
                <div className="flex items-center justify-between px-4 py-2">
                  <h3 className="text-lg font-medium text-gray-700">
                    Pest: a delightful PHP Testing Framework
                  </h3>
                  <span className="block text-gray-600 font-light text-sm">
                    29 Feb 2022
                  </span>
                </div>
              </a>

              <a
                className="mt-8 max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                href="/"
              >
                <div className="flex items-center justify-between px-4 py-2">
                  <h3 className="text-lg font-medium text-gray-700">
                    Using inline SVGs in Vue components
                  </h3>
                  <span className="block text-gray-600 font-light text-sm">
                    15 May 2022
                  </span>
                </div>
              </a>

              <a
                className="mt-8 max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                href="/"
              >
                <div className="flex items-center justify-between px-4 py-2">
                  <h3 className="text-lg font-medium text-gray-700">
                    Acceptance Testing Laravel & VueJs Apps with Codeception
                  </h3>
                  <span className="block text-gray-600 font-light text-sm">
                    3 March 2022
                  </span>
                </div>
              </a>
            </div>

            <div className="flex items-center justify-center mt-12">
              <Link
                className="flex items-center text-gray-600 hover:underline hover:text-gray-500"
                to="/blog"
              >
                <span>View More</span>

                <svg
                  className="h-5 w-5 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>
        <section className="bg-white py-20">
          <div className="max-w-5xl px-6 mx-auto text-center">
            <h2 className="text-2xl font-semibold text-gray-800 pb-5">
              My YouTube Channel
            </h2>
            <hr className="pb-5 w-2/3 mx-auto" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              <iframe
                width="350"
                height="215"
                src="https://www.youtube.com/embed/U6ywuM9PhE4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <iframe
                width="350"
                height="215"
                src="https://www.youtube.com/embed/lccj46VL1p8"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </section>

        <section className="bg-gray-800 pattern py-20">
          <div className="max-w-5xl px-6 mx-auto text-center">
            <h2 className="text-2xl font-semibold text-white">Projects</h2>

            <div className="flex items-center justify-center mt-10">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="max-w-xs w-full">
                  <div className="flex items-center justify-center h-56 bg-white border-b-8 border-teal-400 rounded-md overflow-hidden">
                    <img
                      className="object-cover"
                      src="/demowebsite/eutostylebd.png"
                      alt="hello im"
                    />
                  </div>

                  <a
                    href="https://eurostylebd.com/"
                    className="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                  >
                    <div className="py-2 px-3 text-center text-sm">
                      <p className="text-gray-300">Fashion Website</p>
                    </div>
                  </a>
                </div>

                <div className="max-w-xs w-full">
                  <div className="flex items-center justify-center h-56 bg-white border-b-8 border-teal-400 rounded-md overflow-hidden">
                    <img
                      className="object-cover"
                      src="/demowebsite/dev-geo.png"
                      alt="hello im"
                    />
                  </div>

                  <a
                    href="https://dev.geostruc.com/"
                    className="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                  >
                    <div className="py-2 px-3 text-center text-sm">
                      <p className="text-gray-300">
                        Architecture Website in My Office
                      </p>
                    </div>
                  </a>
                </div>

                <div className="max-w-xs w-full">
                  <div className="flex items-center justify-center h-56 bg-white border-b-8 border-teal-400 rounded-md overflow-hidden">
                    <img
                      className="object-cover"
                      src="/demowebsite/hostx.png"
                      alt="hello im"
                    />
                  </div>

                  <a
                    href="https://hostx-8d9a1.web.app/"
                    className="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                  >
                    <div className="py-2 px-3 text-center text-sm">
                      <p className="text-gray-300">
                        Hosting Company for my Own Design
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center mt-12">
              <a
                className="flex items-center text-white hover:underline hover:text-gray-200"
                href="github.com/sm-jahangir?tab=repositories"
              >
                <span>View More On Github</span>

                <svg
                  className="h-5 w-5 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Portfolio;
