import Link from "next/link";
import React from "react";
import { useAnonAadhaar } from "@anon-aadhaar/react";
import { LogInWithAnonAadhaar } from "@anon-aadhaar/react";

function Navbar() {
  const [anonAadhaarState] = useAnonAadhaar();

  return (
    <div className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          <a href="/">Concertify</a>
        </div>
        <div className="flex items-center space-x-3">
          <ul className="flex space-x-4">
            <Link href="/Event" className="text-gray-300 hover:text-white">
              Events
            </Link>
            <Link href="/Venue" className="text-gray-300 hover:text-white">
              Venues
            </Link>
            <Link href="/Profile" className="text-gray-300 hover:text-white">
              Profile
            </Link>
            <Link href="/Contact" className="text-gray-300 hover:text-white">
              Contact
            </Link>
          </ul>
          <div className="flex items-center space-x-4">
            {anonAadhaarState.status === "logged-in" ? (
              <span className="text-white">
                Logged in as {anonAadhaarState.anonAadhaarProof.identity}
              </span>
            ) : (
              <LogInWithAnonAadhaar nullifierSeed={1234} />
            )}
            <w3m-button />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
