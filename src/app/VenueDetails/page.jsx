import React from "react";
import { useLocation } from "react-router-dom";

function VenueDetails() {
  const { state } = useLocation();
  const venue = state?.venue;

  if (!venue) {
    return <p>No venue data available.</p>;
  }

  return (
    <div className="py-12 bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto">
          <h2 className="text-3xl font-bold mb-4">{venue.name}</h2>
          <p className="text-gray-700 mb-4">{venue.description}</p>
          <p className="text-gray-600 mb-2">
            <strong>Contact Details:</strong> {venue.contact}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Address:</strong> {venue.address}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Capacity:</strong> {venue.capacity}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Price:</strong> {venue.cost}
          </p>

          <button
            className="bg-blue-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700 transition mt-4"
            onClick={() => alert("Booking functionality not implemented yet")}
          >
            Book Venue
          </button>
        </div>
      </div>
    </div>
  );
}

export default VenueDetails;
