

import { useEffect, useState } from "react";
import { getAllClasses } from "../api/class";
import { Link } from "react-router-dom";

const MyClasses = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    getAllClasses().then((data) => {
      setClasses(data);
    });
  }, []);

  const handleUpdateClass = (classId) => {
    // Handle updating the class
    // ...
    console.log(classId)
  };

  const handleAdminFeedback = (classId, feedback) => {
    setClasses((prevClasses) =>
      prevClasses.map((cls) =>
        cls.id === classId ? { ...cls, feedback } : cls
      )
    );
  };

  const getEnrolledStudentsCount = (classId) => {
    const cls = classes.find((cls) => cls._id === classId);
    return cls ? cls.enrolledStudents : 0;
  };


  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">My Classes</h2>
      {classes.map((cls) => (
        <div key={cls._id} className="border p-4 mb-4">
          <h3 className="text-lg font-bold">{cls.className}</h3>
          <p>Status: {cls.status}</p>
          {/* {cls.status === "denied" ||
            cls.status === "approved" && (
              <div>
                <label htmlFor={`feedback-${cls.id}`}>Feedback:</label>
                <textarea
                  id={`feedback-${cls.id}`}
                  rows={3}
                  value={cls.feedback}
                  onChange={(e) => handleAdminFeedback(cls._id, e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:ring-blue-500 text-black"
                />
              </div>
            )} */}

          <p className="text-red-500 mb-4 ">Feedback: {cls.feedback}</p>
          <p>Total Enrolled Students: {getEnrolledStudentsCount(cls._id)}</p>
          <Link to={`update/${cls._id}`}
            onClick={() => handleUpdateClass(cls._id)}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors mt-2">
            Update
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MyClasses;
