import Link from "next/link";
import React from "react";
import Navbar from "../components/Navbar";
// import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Navbar />

      <div
        className="bg-cover bg-center h-screen"
        style={{
          backgroundImage:
            "url(https://imgs.search.brave.com/otBrJGY1YEN1RzNt5LEJvVGQBl1oTbi93TEvJs92zWw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJiYXQuY29t/L2ltZy84ODI1NS1j/b25jZXJ0LWhkLXdh/bGxwYXBlci1hbmQt/YmFja2dyb3VuZC1p/bWFnZS5qcGc)",
        }}
      >
        <div className="bg-black bg-opacity-50 h-full flex flex-col justify-start py-[150px] items-center">
          <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
            Welcome to Concertify
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 text-center">
            The ultimate event management platform for your concerts and events
          </p>
          <Link
            href="/createProfile"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
