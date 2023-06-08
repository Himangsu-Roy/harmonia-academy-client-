import { useState } from "react";

const MyClasses = () => {
  const [classes, setClasses] = useState([
    {
      id: 1,
      className: "Yoga Class",
      status: "pending",
      totalEnrolledStudents: 0,
      feedback: "",
    },
    {
      id: 2,
      className: "Pilates Class",
      status: "approved",
      totalEnrolledStudents: 10,
      feedback: "",
    },
    {
      id: 3,
      className: "Zumba Class",
      status: "denied",
      totalEnrolledStudents: 5,
      feedback: "The class schedule conflicts with another class.",
    },
  ]);

  const handleUpdateClass = (classId) => {
    // Handle update logic for the class with the given id
    console.log(`Update class with id ${classId}`);
  };

  return (
    <div className="max-w-md mx-auto ">
      <h2 className="text-2xl font-bold mb-4">My Classes</h2>
      {classes.map((classItem) => (
        <div
          key={classItem.id}
          className="bg-white shadow-lg p-4 rounded-md mb-4 text-black">
          <h3 className="text-lg font-bold">{classItem.className}</h3>
          <p>Status: {classItem.status}</p>
          <p>Total Enrolled Students: {classItem.totalEnrolledStudents}</p>
          {classItem.status === "denied" && (
            <p className="text-red-500">Feedback: {classItem.feedback}</p>
          )}
          <button
            onClick={() => handleUpdateClass(classItem.id)}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
            Update
          </button>
        </div>
      ))}
    </div>
  );
};

export default MyClasses;
