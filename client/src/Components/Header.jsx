import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <header className="bg-zinc shadow-md">
      <div className="flex p-6  justify-between items-center max-w-6xl mx-auto">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-lightbrown">URBAN</span>
            <span className="text-brown">SHELTER</span>
          </h1>
        </Link>
        <form className="bg-white p-3 rounded-lg flex items-center shadow-md">
          <input
            type="text"
            placeholder="Find..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-brown" />
        </form>
        <ul className="flex gap-4 text font-medium">
          <Link to="/">
            <li className="hidden sm:inline text-brown hover:underline">
              Home
            </li>
          </Link>
          <Link to="/About">
            <li className="hidden sm:inline text-brown hover:underline">
              About
            </li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img className="rounded-full w-9 h-9 object-cover " src={currentUser.avatar} alt="no photo" />
            ) : (
              <li className="text-brown hover:underline">Sign-in</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
