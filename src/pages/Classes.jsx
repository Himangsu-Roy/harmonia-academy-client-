import React from "react";

const Classes = ({ loggedIn, isAdmin }) => {
  const classes = [
    {
      name: "Music Theory 101",
      instructor: "John Doe",
      image: "/images/music-theory.jpg",
      availableSeats: 10,
      price: 99,
    },
    {
      name: "Guitar Basics",
      instructor: "Jane Smith",
      image: "/images/guitar-basics.jpg",
      availableSeats: 5,
      price: 149,
    },
    // Add more classes here...
  ];

  const handleSelectClass = (className) => {
    if (!loggedIn) {
      alert("Please log in before selecting the course.");
      return;
    }

    if (isAdmin) {
      alert("As an admin/instructor, you cannot select a class.");
      return;
    }

    alert(`You have selected the class: ${className}`);
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Classes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {classes.map((cls, index) => (
          <div
            key={index}
            className={`bg-white rounded-lg overflow-hidden shadow-md ${
              cls.availableSeats === 0 ? "bg-red-200" : ""
            }`}>
            <img
              className="w-full h-48 object-cover"
              src={cls.image}
              alt={cls.name}
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {cls.name}
              </h3>
              <p className="text-gray-600">Instructor: {cls.instructor}</p>
              <p className="text-gray-600">
                Available Seats: {cls.availableSeats}
              </p>
              <p className="text-gray-600">Price: ${cls.price}</p>
              <button
                className={`mt-4 bg-blue-500 text-white py-2 px-4 rounded ${
                  !loggedIn || isAdmin || cls.availableSeats === 0
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                onClick={() => handleSelectClass(cls.name)}
                disabled={!loggedIn || isAdmin || cls.availableSeats === 0}>
                {loggedIn ? "Select" : "Log in to Select"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
