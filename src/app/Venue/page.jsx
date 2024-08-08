"use Client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const venues = [
  {
    id: 1,
    name: "The Grand Hall",
    description:
      "A luxurious hall with elegant decor and state-of-the-art facilities.",
    address: "123 Main St, Candoline, Goa",
    cost: "$500 per day",
    image:
      "https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg?t=st=1722932885~exp=1722936485~hmac=02e931d40aaef5c2821a19370d3e9a110b7191fa51abab395fb7364023995c70&w=1380",
    contact: 12334567890,
    capacity: 100,
  },
  {
    id: 2,
    name: "The Garden Pavilion",
    description:
      "An outdoor venue surrounded by lush gardens, perfect for weddings and events.",
    address: "456 Elm St, Candoline, Goa",
    cost: "$300 per day",
    image:
      "https://img.freepik.com/free-photo/interior-restaurant-design_1409-7341.jpg?t=st=1722933961~exp=1722937561~hmac=b9c090e8d083dab81f1930f9f2a24fcfdc83c2afd797db6d126dd576d290d572&w=1380",
    contact: 12334567890,
    capacity: 200,
  },
  {
    id: 3,
    name: "Riverside Conference Center",
    description:
      "A modern conference center with river views and cutting-edge technology.",
    address: "789 Oak St, Baga, Goa",
    cost: "$700 per day",
    image: "https://images.pexels.com/photos/260689/pexels-photo-260689.jpeg",
    contact: 12334567890,
    capacity: 500,
  },
];

function Venue() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter venues based on searchTerm
  const filteredVenues = venues.filter(
    (venue) =>
      venue.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      venue.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle search button click
  const handleSearch = () => {
    // The search functionality is already handled by filtering in real-time
    // This function can be used for additional actions if needed
    console.log("Search button clicked");
  };

  return (
    <div className="py-12 bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Venues</h2>
        {/* Search Box and Button */}
        <div className="mb-8 flex justify-center items-center gap-4">
          <input
            type="text"
            placeholder="Search venues..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/2 lg:w-1/3"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Search
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVenues.length > 0 ? (
            filteredVenues.map((venue) => (
              <Link
                href={`/venuedetails/${venue.id}`}
                key={venue.id}
                state={{ venue }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <Image
                  src={venue.image}
                  alt={venue.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{venue.name}</h3>
                  <p className="text-gray-700 mb-4">{venue.description}</p>
                  <p className="text-gray-600 mb-2">
                    <strong>Address:</strong> {venue.address}
                  </p>
                  <p className="text-lg font-bold text-blue-600">
                    {venue.cost}
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-gray-500">No venues found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Venue;
