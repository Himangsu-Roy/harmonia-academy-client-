import React, { useEffect, useState } from "react";
import { getAllClasses, getClass, selectClass } from "../api/class";
import useAuth from "../hooks/useAuth";

const Classes = ({ loggedIn, isAdmin }) => {
  const {user} = useAuth();
  const [classes, setClasses] = useState([]);
  // const classes = [
  //   {
  //     name: "Music Theory 101",
  //     instructor: "John Doe",
  //     image: "/images/music-theory.jpg",
  //     availableSeats: 10,
  //     price: 99,
  //   },
  //   {
  //     name: "Guitar Basics",
  //     instructor: "Jane Smith",
  //     image: "/images/guitar-basics.jpg",
  //     availableSeats: 5,
  //     price: 149,
  //   },
  //   // Add more classes here...
  // ];

  useEffect(() => {
    getAllClasses()
      .then(data => {
        console.log(data)
        setClasses(data)
      })
  }, [])

  console.log(classes)

  const handleSelectClass = (classId) => {
    if (!user) {
      alert("Please log in before selecting the course.");
      return;
    }

    if (isAdmin) {
      alert("As an admin/instructor, you cannot select a class.");
      return;
    }

    // get class by id
    getClass(classId)
    .then(data => {
      console.log(data)
      data.map(item => {
        selectClass(item)
        .then(data => {
          console.log(data)
        })
      })
    })
    console.log(classId)

    // selectClass(classes)
    


    alert(`You have selected the class: ${""}`);
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Classes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {classes.map((cls, index) => (
          <div
            key={index}
            className={`bg-white rounded-lg overflow-hidden shadow-md ${
              cls.availableSeats === 0 ? "bg-red-400" : ""
            }`}>
            <img
              className="w-full h-48 object-cover"
              src={cls.classImage}
              alt={cls.className}
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {cls.className}
              </h3>
              <p className="text-gray-600">Instructor: {cls.instructorName}</p>
              <p className="text-gray-600">
                Available Seats: {cls.availableSeats}
              </p>
              <p className="text-gray-600">Price: ${cls.price}</p>
              <button
                className={`mt-4 bg-blue-500 text-white py-2 px-4 rounded ${
                  !user || isAdmin || cls.availableSeats === 0
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                onClick={() => handleSelectClass(cls._id)}
                disabled={!user || isAdmin || cls.availableSeats === 0}>
                {user ? "Select" : "Log in to Select"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
