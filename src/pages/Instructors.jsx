import React, { useEffect, useState } from "react";
import { getInstructors } from "../api/instructors";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]) 


  useEffect(() => {
    getInstructors()
    .then(data => {
      setInstructors(data)
    })
  }, [instructors])

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Instructors</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {instructors.map((instructor, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              className="w-full h-48 object-cover"
              src={instructor.image}
              alt={instructor.name}
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {instructor.name}
              </h3>
              <p className="text-gray-600">{instructor.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
