import { useState } from "react";

const ManageClasses = () => {
  const [classes, setClasses] = useState([
    {
      id: 1,
      className: "Yoga Class",
      instructorName: "John Doe",
      instructorEmail: "john.doe@example.com",
      availableSeats: 10,
      price: 20,
      status: "pending",
    },
    // Add more class objects here
  ]);

  const [selectedClass, setSelectedClass] = useState(null);
  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");

  const handleApproveClass = (classId) => {
    // Update the status of the class with the given id to "approved"
    setClasses((prevClasses) =>
      prevClasses.map((classItem) =>
        classItem.id === classId
          ? { ...classItem, status: "approved" }
          : classItem
      )
    );
  };

  const handleDenyClass = (classId) => {
    // Update the status of the class with the given id to "denied"
    setClasses((prevClasses) =>
      prevClasses.map((classItem) =>
        classItem.id === classId
          ? { ...classItem, status: "denied" }
          : classItem
      )
    );
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
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Manage Classes</h2>
      {classes.map((classItem) => (
        <div
          key={classItem.id}
          className="bg-white shadow-lg p-4 rounded-md mb-4 text-black">
          <img
            src={classItem.classImage}
            alt="Class"
            className="w-32 h-32 object-cover mb-2"
          />
          <h3 className="text-lg font-bold">{classItem.className}</h3>
          <p>Instructor: {classItem.instructorName}</p>
          <p>Instructor Email: {classItem.instructorEmail}</p>
          <p>Available Seats: {classItem.availableSeats}</p>
          <p>Price: ${classItem.price}</p>
          <p>Status: {classItem.status}</p>
          <div className="flex justify-between mt-4">
            {classItem.status === "pending" && (
              <button
                onClick={() => handleApproveClass(classItem.id)}
                className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors">
                Approve
              </button>
            )}
            {classItem.status === "pending" && (
              <button
                onClick={() => handleDenyClass(classItem.id)}
                className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors">
                Deny
              </button>
            )}
            {classItem.status !== "pending" && (
              <button
                onClick={() => handleOpenFeedbackModal(classItem.id)}
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
                Send Feedback
              </button>
            )}
          </div>
        </div>
      ))}
      {feedbackModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-md">
            <h3 className="text-lg font-bold mb-2">Send Feedback</h3>
            <textarea
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
              className="w-full h-24 p-2 mb-2"
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
