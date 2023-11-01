import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const SignIn = () => {
  const [change, setchange] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  useEffect(() => {
    console.log(change);
  }, [change]);

  const handleChange = (e) => {
    setchange({
      ...change,
      [e.target.id]: e.target.value,
    });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(change),
      });

      if (res.ok) {
        navigate("/");
      } else {
        const responseData = await res.json();
        console.error("Login failed:", responseData);
      }
      console.error("Login failed");
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <div className="mt-11 flex flex-col items-center justify-center ">
      <div className="bg-white p-6 md:p-8 w-full md:w-80 lg:w-96 max-w-md rounded-lg shadow-md text-brown">
        <h2 className="text-2xl md:text-3xl font-bold text-brown mb-3 text-center ">
          Sign In
        </h2>
        <form onSubmit={handlesubmit} className="w-full">
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
              onChange={handleChange}
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
              onChange={handleChange}
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
          <p className=""> Dont have an account?</p>
          <Link to="/signup">
            <span className="underline hover:shadow">Signup</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
