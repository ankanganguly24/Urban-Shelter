import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (res.ok) {
      // Handle successful login, e.g., redirect to a dashboard.
      navigate('/dashboard');
    } else {
      // Handle login failure, e.g., display an error message.
      console.error('Login error:', res.status);
    }
  };

  return (
    <div className="mt-11 flex flex-col items-center justify-center">
      <div className="bg-white p-6 md:p-8 w-full md:w-80 lg:w-96 max-w-md rounded-lg shadow-md text-brown">
        <h2 className="text-2xl md:text-3xl font-bold text-brown mb-3 text-center">
          Log In
        </h2>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-brown"
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
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
              Log In
            </button>
          </div>
        </form>
        <div className="flex gap-1 mt-3">
          <p className=""> Dont have an account?</p>
          <Link to="/signup">
            <span className="underline hover:shadow">Sign Up</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn