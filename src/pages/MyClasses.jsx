import { useState } from "react";
import { Link } from "react-router-dom";

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
          <p className="">
            Total Enrolled Students: {classItem.totalEnrolledStudents}
          </p>
          {classItem.status === "denied" && (
            <p className="text-red-500 mb-4 ">Feedback: {classItem.feedback}</p>
          )}
          <div className="mt-4">
            <Link
              to={`update/${classItem.id}`}
              onClick={() => handleUpdateClass(classItem.id)}
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
              Update
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyClasses;




// import React, { useState } from "react";

// const MyClasses = ({ classData }) => {
  
//   const [showFeedbackModal, setShowFeedbackModal] = useState(false);
//   const [selectedClass, setSelectedClass] = useState(null);
//   const [feedbackData, setFeedbackData] = useState({
//     rating: "",
//     comments: "",
//   });

//   // Function to handle feedback form submission
//   const handleFeedbackSubmit = (e) => {
//     e.preventDefault();

//     // Perform necessary actions with feedbackData
//     console.log(feedbackData);

//     // Reset feedback form
//     setFeedbackData({
//       rating: "",
//       comments: "",
//     });

//     // Close the feedback modal
//     setShowFeedbackModal(false);
//   };

//   // Function to handle feedback form input changes
//   const handleFeedbackInputChange = (e) => {
//     const { name, value } = e.target;
//     setFeedbackData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // Function to open feedback modal for a specific class
//   const openFeedbackModal = (classData) => {
//     setSelectedClass(classData);
//     setShowFeedbackModal(true);
//   };

//   return (
//     <div>
//       <h3>{classData.className}</h3>
//       <p>Status: {classData.status}</p>
//       <p>Total Enrolled Students: {classData.totalEnrolled}</p>
//       {/* Add feedback button for each class */}
//       <button onClick={() => openFeedbackModal(classData)}>
//         Provide Feedback
//       </button>

//       {/* Feedback Modal */}
//       {showFeedbackModal && (
//         <div className="modal">
//           <div className="modal-content">
//             <h2>Provide Feedback for {selectedClass.className}</h2>
//             <form onSubmit={handleFeedbackSubmit}>
//               <label>
//                 Rating:
//                 <input
//                   type="number"
//                   name="rating"
//                   value={feedbackData.rating}
//                   onChange={handleFeedbackInputChange}
//                 />
//               </label>
//               <label>
//                 Comments:
//                 <textarea
//                   name="comments"
//                   value={feedbackData.comments}
//                   onChange={handleFeedbackInputChange}></textarea>
//               </label>
//               <button type="submit">Submit</button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyClasses;
