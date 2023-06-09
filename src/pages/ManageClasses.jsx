// import React, { useState } from "react";

// const ManageClasses = () => {
//   const [classes, setClasses] = useState([
//     {
//       id: 1,
//       className: "Yoga Class",
//       image: "image.jpg",
//       instructorName: "John Doe",
//       instructorEmail: "john.doe@example.com",
//       availableSeats: 10,
//       price: 20,
//       status: "pending",
//     },
//     // Add more class objects here
//   ]);

//   const [selectedClass, setSelectedClass] = useState(null);
//   const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
//   const [feedbackText, setFeedbackText] = useState("");

//   const handleApproveClass = (classId) => {
//     // Update the status of the class with the given id to "approved"
//     setClasses((prevClasses) =>
//       prevClasses.map((classItem) =>
//         classItem.id === classId
//           ? { ...classItem, status: "approved" }
//           : classItem
//       )
//     );
//   };

//   const handleDenyClass = (classId) => {
//     // Update the status of the class with the given id to "denied"
//     setClasses((prevClasses) =>
//       prevClasses.map((classItem) =>
//         classItem.id === classId
//           ? { ...classItem, status: "denied" }
//           : classItem
//       )
//     );
//   };

//   const handleOpenFeedbackModal = (classId) => {
//     setSelectedClass(classId);
//     setFeedbackModalOpen(true);
//   };

//   const handleCloseFeedbackModal = () => {
//     setSelectedClass(null);
//     setFeedbackText("");
//     setFeedbackModalOpen(false);
//   };

//   const handleSendFeedback = () => {
//     // Handle sending feedback to the instructor for the selected class
//     console.log(
//       `Send feedback to instructor for class with id ${selectedClass}`
//     );
//     console.log(`Feedback: ${feedbackText}`);
//     handleCloseFeedbackModal();
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Manage Classes</h2>
//       <div className="overflow-x-auto">
//         <table className="w-full">
//           <thead>
//             <tr>
//               <th className="py-2">Class Image</th>
//               <th className="py-2">Class Name</th>
//               <th className="py-2">Instructor Name</th>
//               <th className="py-2">Instructor Email</th>
//               <th className="py-2">Available Seats</th>
//               <th className="py-2">Price</th>
//               <th className="py-2">Status</th>
//               <th className="py-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody className="text-center">
//             {classes.map((classItem) => (
//               <tr key={classItem.id}>
//                 <td className="py-2 w-12 h-12 rounded">
//                   {" "}
//                   <img src={classItem.image} alt="" />{" "}
//                 </td>
//                 <td className="py-2">{classItem.className}</td>
//                 <td className="py-2">{classItem.instructorName}</td>
//                 <td className="py-2">{classItem.instructorEmail}</td>
//                 <td className="py-2">{classItem.availableSeats}</td>
//                 <td className="py-2">${classItem.price}</td>
//                 <td className="py-2">{classItem.status}</td>
//                 <td className="py-2 flex justify-center">
//                   {classItem.status === "pending" && (
//                     <>
//                       <button
//                         onClick={() => handleApproveClass(classItem.id)}
//                         className="bg-green-500 text-white py-1 px-2 rounded-md mr-2 hover:bg-green-600 transition-colors">
//                         Approve
//                       </button>
//                       <button
//                         onClick={() => handleDenyClass(classItem.id)}
//                         className="bg-red-500 text-white py-1 px-2 rounded-md hover:bg-red-600 transition-colors">
//                         Deny
//                       </button>
//                     </>
//                   )}
//                   {classItem.status !== "pending" && (
//                     <button
//                       onClick={() => handleOpenFeedbackModal(classItem.id)}
//                       className="bg-blue-500 text-white py-1 px-2 rounded-md hover:bg-blue-600 transition-colors">
//                       Send Feedback
//                     </button>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       {feedbackModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-4 rounded-md">
//             <h3 className="text-lg font-bold mb-2">Send Feedback</h3>
//             <textarea
//               value={feedbackText}
//               onChange={(e) => setFeedbackText(e.target.value)}
//               className="w-[500px] h-24 p-2 mb-2"
//               placeholder="Write your feedback here..."
//             />
//             <div className="flex justify-end">
//               <button
//                 onClick={handleCloseFeedbackModal}
//                 className="text-gray-500 hover:text-gray-700 mr-2">
//                 Cancel
//               </button>
//               <button
//                 onClick={handleSendFeedback}
//                 className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
//                 Send
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ManageClasses;




import { useState } from "react";
import { Link } from "react-router-dom";

const ManageClasses = () => {
  const [selectedClass, setSelectedClass] = useState(null);
    const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
    const [feedbackText, setFeedbackText] = useState("");

  const [classes, setClasses] = useState([
    {
      id: 1,
      className: "Class 1",
      instructorName: "John Doe",
      instructorEmail: "john@example.com",
      availableSeats: 10,
      price: "$99",
      status: "pending",
    },
    {
      id: 2,
      className: "Class 2",
      instructorName: "Jane Smith",
      instructorEmail: "jane@example.com",
      availableSeats: 5,
      price: "$49",
      status: "pending",
    },
    // Add more example data as needed
  ]);

  const handleApprove = (classId) => {
    // Update the status of the class to "approved"
    const updatedClasses = classes.map((cls) =>
      cls.id === classId ? { ...cls, status: "approved" } : cls
    );

    setClasses(updatedClasses);
  };

  const handleDeny = (classId) => {
    // Update the status of the class to "denied"
    const updatedClasses = classes.map((cls) =>
      cls.id === classId ? { ...cls, status: "denied" } : cls
    );

    setClasses(updatedClasses);
  };



  const handleOpenFeedbackModal = (classId) => {
    setSelectedClass(classId);
    setFeedbackModalOpen(true);
  };

  const handleCloseFeedbackModal = () => {
    setSelectedClass(null);
    setFeedbackText("");
    setFeedbackModalOpen(false);
  };

  const handleSendFeedback = () => {
    // Handle sending feedback to the instructor for the selected class
    console.log(
      `Send feedback to instructor for class with id ${selectedClass}`
    );
    console.log(`Feedback: ${feedbackText}`);
    handleCloseFeedbackModal();
  };


  

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Manage Classes</h2>
      <div className="overflow-x-auto text-black">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-3 px-6 bg-gray-100 border-b">Class Image</th>
              <th className="py-3 px-6 bg-gray-100 border-b">Class Name</th>
              <th className="py-3 px-6 bg-gray-100 border-b">
                Instructor Name
              </th>
              <th className="py-3 px-6 bg-gray-100 border-b">
                Instructor Email
              </th>
              <th className="py-3 px-6 bg-gray-100 border-b">
                Available Seats
              </th>
              <th className="py-3 px-6 bg-gray-100 border-b">Price</th>
              <th className="py-3 px-6 bg-gray-100 border-b">Status</th>
              <th className="py-3 px-6 bg-gray-100 border-b">Actions</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {classes.map((cls) => (
              <tr key={cls.id}>
                <td className="py-4 px-6 border-b">
                  {/* Class Image */}
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-md">
                      <img src="" alt="image" />
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6 border-b">{cls.className}</td>
                <td className="py-4 px-6 border-b">{cls.instructorName}</td>
                <td className="py-4 px-6 border-b">{cls.instructorEmail}</td>
                <td className="py-4 px-6 border-b">{cls.availableSeats}</td>
                <td className="py-4 px-6 border-b">{cls.price}</td>
                <td className="py-4 px-6 border-b">{cls.status}</td>
                <td className="py-4 px-6 border-b flex">
                  {cls.status === "pending" ? (
                    <>
                      <button
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2"
                        onClick={() => handleApprove(cls.id)}
                        >
                        Approve
                      </button>
                      <button
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleDeny(cls.id)}
                        >
                        Deny
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="bg-green-200 text-white font-bold py-2 px-4 rounded mr-2"
                        disabled>
                        Approve
                      </button>
                      <button
                        className="bg-red-200 text-white font-bold py-2 px-4 rounded"
                        disabled>
                        Deny
                      </button>
                    </>
                  )}
                  <button
                    onClick={() => handleOpenFeedbackModal(cls.id)}
                    // to={`/feedback/${cls.id}`}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ml-2">
                    Send Feedback
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {feedbackModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 text-black">
          <div className="bg-white p-4 rounded-md">
            <h3 className="text-lg font-bold mb-2">Send Feedback</h3>
            <textarea
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
              className="w-[500px] h-24 p-2 mb-2"
              placeholder="Write your feedback here..."
            />
            <div className="flex justify-end">
              <button
                onClick={handleCloseFeedbackModal}
                className="text-gray-500 hover:text-gray-700 mr-2">
                Cancel
              </button>
              <button
                onClick={handleSendFeedback}
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageClasses;
