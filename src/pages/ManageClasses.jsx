import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllClasses, giveFeedback, updateStatus } from "../api/class";
import Loader from "../components/Loader";

const ManageClasses = () => {
  const [loading, setLoading] = useState(false)
  const [selectedClass, setSelectedClass] = useState(null);
  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");
 

  const [classes, setClasses] = useState([]);
  useEffect(() => {
    setLoading(true)
    getAllClasses().then((data) => {
      setClasses(data);
      setLoading(false)
    });
  }, []);


   if (loading) {
     return <Loader />;
   }

  const handleApprove = (classId) => {
    // Update the status of the class to "approved"
    const updatedClasses = classes.map((cls) =>
      cls._id === classId ? { ...cls, status: "approved" } : cls
    );
    setClasses(updatedClasses);
    updateStatus(classId, { status: "approved" }).then((data) => {
      console.log(data);
    });
  };

  const handleDeny = (classId) => {
    // Update the status of the class to "denied"
    const updatedClasses = classes.map((cls) =>
      cls.id === classId ? { ...cls, status: "denied" } : cls
    );

    setClasses(updatedClasses);
    updateStatus(classId, { status: "denied" }).then((data) => {
      console.log(data);
    });
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
    
    giveFeedback(selectedClass, feedbackText)
      .then(data => {
        console.log(data)
      })
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
              <tr key={cls._id}>
                <td className="py-4 px-6 border-b">
                  {/* Class Image */}
                  <div className="flex items-center">
                    <div className=" bg-gray-300 rounded-md">
                      <img src={cls.classImage} alt="image" />
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
                        onClick={() => handleApprove(cls._id)}>
                        Approve
                      </button>
                      <button
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleDeny(cls.id)}>
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
                    onClick={() => handleOpenFeedbackModal(cls._id)}
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
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 text-black ">
          <div className="bg-white p-4 rounded-md w-[300px] ml-10 sm:w-[400px] sm:ml-24">
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
