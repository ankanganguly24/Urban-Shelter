import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="mt-11 flex flex-col items-center justify-center ">

      <div className="bg-white p-6 md:p-8 w-full md:w-80 lg:w-96 max-w-md rounded-lg shadow-md text-brown">

        <h2 className="text-2xl md:text-3xl font-bold text-brown mb-3 text-center ">
          Sign Up
        </h2>

        <form className="w-full">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-brown"
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-brown"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">

            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>

            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus-border-brown"
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex justify-center">
            <button
              className="bg-brown text-white py-2 px-4 rounded-md font-semibold hover:bg-lightbrown hover:shadow-lg transition-transform transform hover:scale-105"
              type="submit"
            >
              Enter
            </button>

          </div>
        </form>
        <div className="flex gap-1 mt-3">
        <p className="">
          Already have an account?
        </p>
        <Link to={"/signin"}>
          <span className="underline hover:shadow"> 
            SignIn
          </span>
           </Link>

      </div>
      </div>
    </div>

  );
};

export default SignUp;
