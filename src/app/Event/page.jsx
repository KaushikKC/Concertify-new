"use client";
import Link from "next/link";
import React, { useState } from "react";
import Navbar from "../components/Navbar";

function Event() {
  const [filters, setFilters] = useState({
    name: "",
    duration: "",
    date: "",
    isFree: null,
    status: "",
  });
  const [showPopup, setShowPopup] = useState(false);
  const [showCreateEvent, setShowCreateEvent] = useState(false);
  const [newEvent, setNewEvent] = useState({
    name: "",
    hostname: "",
    description: "",
    date: "",
    duration: "",
    isFree: false,
    address: "",
  });

  const [events, setEvents] = useState([
    {
      id: 1,
      name: "Concert A",
      hostname: "Madhu",
      description: "An amazing concert featuring popular bands.",
      date: "2024-08-15",
      duration: "3 hours",
      isFree: false,
      status: "Upcoming",
      address: "123 St., Candoline, Goa",
    },
    {
      id: 2,
      name: "Workshop B",
      hostname: "Kaushik",
      description: "A hands-on workshop on event management.",
      date: "2024-09-05",
      duration: "2 hours",
      isFree: true,
      status: "Past",
      address: "123 St., Candoline, Goa",
    },
    {
      id: 3,
      name: "Festival C",
      hostname: "Ashwin",
      description: "A fun-filled festival with food, music, and games.",
      date: "2024-10-01",
      duration: "All day",
      isFree: false,
      status: "Upcoming",
      address: "123 St., Candoline, Goa",
    },
  ]);

  const today = new Date();
  const filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    const isUpcoming = eventDate >= today;

    return (
      (filters.name
        ? event.name.toLowerCase().includes(filters.name.toLowerCase())
        : true) &&
      (filters.duration
        ? event.duration.toLowerCase().includes(filters.duration.toLowerCase())
        : true) &&
      (filters.date ? event.date === filters.date : true) &&
      (filters.isFree === null ? true : event.isFree === filters.isFree) &&
      (filters.status
        ? event.status.toLowerCase() === filters.status.toLowerCase()
        : true)
    );
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    let newValue;

    if (name === "isFree") {
      newValue = value === "" ? null : value === "true" ? true : false;
    } else {
      newValue = value === "" ? null : value;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: newValue,
    }));
  };

  const handleCreateEventChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewEvent((prevEvent) => ({
      ...prevEvent,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCreateEventSubmit = (e) => {
    e.preventDefault();
    const newEventWithId = { ...newEvent, id: events.length + 1 };
    setEvents((prevEvents) => [...prevEvents, newEventWithId]);
    setShowCreateEvent(false);
    setNewEvent({
      name: "",
      hostname: "",
      description: "",
      date: "",
      duration: "",
      isFree: false,
      status: "",
    });
  };

  return (
    <div>
      <Navbar />

      <div className="py-12 bg-gray-100 min-h-screen">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {filters.status || "All"} Events
          </h2>

          {/* Filter Button */}
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700 transition mr-4"
            onClick={() => setShowPopup(!showPopup)}
          >
            Filters
          </button>

          {/* Create Event Button */}
          <button
            className="bg-green-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-green-700 transition"
            onClick={() => setShowCreateEvent(true)}
          >
            Create Event
          </button>

          {/* Filter Popup */}
          {showPopup && (
            <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex justify-center items-center">
              <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full relative">
                <button
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                  onClick={() => setShowPopup(false)}
                  aria-label="Close"
                >
                  &times;
                </button>

                <h3 className="text-2xl font-bold mb-4">Filters</h3>
                <label className="block mb-4">
                  <span className="text-gray-700 block text-left">Name:</span>
                  <input
                    type="text"
                    name="name"
                    value={filters.name}
                    onChange={handleFilterChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 border"
                  />
                </label>
                <label className="block mb-4">
                  <span className="text-gray-700 block text-left">
                    Duration:
                  </span>
                  <input
                    type="text"
                    name="duration"
                    value={filters.duration}
                    onChange={handleFilterChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 border"
                  />
                </label>
                <label className="block mb-4">
                  <span className="text-gray-700 block text-left">Date:</span>
                  <input
                    type="date"
                    name="date"
                    value={filters.date}
                    onChange={handleFilterChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 border"
                  />
                </label>
                <div className="block mb-4">
                  <span className="text-gray-700 block text-left">Cost:</span>
                  <label className="inline-flex items-center mr-4">
                    <input
                      type="radio"
                      name="isFree"
                      value=""
                      checked={filters.isFree === null}
                      onChange={handleFilterChange}
                      className="form-radio"
                    />
                    <span className="ml-2 text-gray-700">All</span>
                  </label>
                  <label className="inline-flex items-center mr-4">
                    <input
                      type="radio"
                      name="isFree"
                      value="true"
                      checked={filters.isFree === true}
                      onChange={handleFilterChange}
                      className="form-radio"
                    />
                    <span className="ml-2 text-gray-700">Free</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="isFree"
                      value="false"
                      checked={filters.isFree === false}
                      onChange={handleFilterChange}
                      className="form-radio"
                    />
                    <span className="ml-2 text-gray-700">Paid</span>
                  </label>
                </div>
                <label className="block mb-6">
                  <span className="text-gray-700 block text-left">Status:</span>
                  <select
                    name="status"
                    value={filters.status}
                    onChange={handleFilterChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 border"
                  >
                    <option value="">All</option>
                    <option value="Upcoming">Upcoming</option>
                    <option value="Past">Past</option>
                  </select>
                </label>
                <button
                  className="bg-blue-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700 transition"
                  onClick={() => setShowPopup(false)}
                >
                  Apply Filters
                </button>
              </div>
            </div>
          )}

          {/* Create Event Modal */}
          {showCreateEvent && (
            <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex justify-center items-center">
              <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full relative">
                <button
                  className="absolute top-6 right-2 text-gray-900 hover:text-gray-700 z-[10] text-xl"
                  onClick={() => setShowCreateEvent(false)}
                  aria-label="Close"
                >
                  &times;
                </button>

                <h3 className="text-2xl font-bold mb-4">Create Event</h3>
                <form onSubmit={handleCreateEventSubmit}>
                  <label className="block mb-4">
                    <span className="text-gray-700 block text-left">Name:</span>
                    <input
                      type="text"
                      name="name"
                      value={newEvent.name}
                      onChange={handleCreateEventChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 border"
                      required
                    />
                  </label>
                  <label className="block mb-4">
                    <span className="text-gray-700 block text-left">
                      Host Name:
                    </span>
                    <input
                      type="text"
                      name="hostname"
                      value={newEvent.hostname}
                      onChange={handleCreateEventChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 border"
                      required
                    />
                  </label>
                  <label className="block mb-4">
                    <span className="text-gray-700 block text-left">
                      Description:
                    </span>
                    <textarea
                      name="description"
                      value={newEvent.description}
                      onChange={handleCreateEventChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 border"
                      required
                    />
                  </label>
                  <label className="block mb-4">
                    <span className="text-gray-700 block text-left">Date:</span>
                    <input
                      type="date"
                      name="date"
                      value={newEvent.date}
                      onChange={handleCreateEventChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 border"
                      required
                    />
                  </label>
                  <label className="block mb-4">
                    <span className="text-gray-700 block text-left">
                      Duration:
                    </span>
                    <input
                      type="text"
                      name="duration"
                      value={newEvent.duration}
                      onChange={handleCreateEventChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 border"
                      required
                    />
                  </label>
                  <div className="block mb-4">
                    <span className="text-gray-700 block text-left">Cost:</span>
                    <label className="inline-flex items-center mr-4">
                      <input
                        type="radio"
                        name="isFree"
                        value="true"
                        checked={newEvent.isFree === true}
                        onChange={handleCreateEventChange}
                        className="form-radio"
                      />
                      <span className="ml-2 text-gray-700">Free</span>
                    </label>
                    <label className="inline-flex items-center mr-4">
                      <input
                        type="radio"
                        name="isFree"
                        value="false"
                        checked={newEvent.isFree === false}
                        onChange={handleCreateEventChange}
                        className="form-radio"
                      />
                      <span className="ml-2 text-gray-700">Paid</span>
                    </label>
                  </div>
                  <label className="block mb-4">
                    <span className="text-gray-700 block text-left">
                      Address:
                    </span>
                    <textarea
                      type="text"
                      name="address"
                      value={newEvent.address}
                      onChange={handleCreateEventChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 border"
                      required
                    />
                  </label>

                  <button
                    type="submit"
                    className="bg-green-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-green-700 transition"
                  >
                    Create Event
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* Event List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <Link
                  href={`/EventDetails/${event.id}`}
                  key={event.id}
                  state={{ event }}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
                >
                  <h3 className="text-2xl font-bold mb-2">{event.name}</h3>
                  <p className="text-gray-700 mb-2">{event.description}</p>
                  <p className="text-gray-600">
                    <strong>Date:</strong>{" "}
                    {new Date(event.date).toLocaleDateString()}
                  </p>
                  <p className="text-gray-600">
                    <strong>Duration:</strong> {event.duration}
                  </p>
                  <p
                    className={`text-lg font-bold ${
                      event.isFree ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {event.isFree ? "Free" : "Paid"}
                  </p>
                </Link>
              ))
            ) : (
              <p className="text-gray-600">No events found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
