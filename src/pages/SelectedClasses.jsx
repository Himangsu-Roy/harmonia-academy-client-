import React, { useState } from "react";

const SelectedClasses = () => {
  const [selectedClasses, setSelectedClasses] = useState([]);

  const handleSelectClass = (className) => {
    // Find the selected class from the available classes
    const selectedClass = availableClasses.find(
      (cls) => cls.name === className
    );

    // Add the selected class to the list of selected classes
    setSelectedClasses([...selectedClasses, selectedClass]);
  };

  const handleDeleteClass = (className) => {
    // Remove the class from the list of selected classes
    const updatedSelectedClasses = selectedClasses.filter(
      (cls) => cls.name !== className
    );
    setSelectedClasses(updatedSelectedClasses);
  };

  return (
    <div className="container mx-auto py-8">
      

      {/* My Selected Classes */}
      <div>
        <h3 className="text-lg font-semibold mb-4">My Selected Classes</h3>
        {selectedClasses.length > 0 ? (
          <table className="w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">Class name</th>
                <th className="border border-gray-300 px-4 py-2">Instructor</th>
                <th className="border border-gray-300 px-4 py-2">
                  Available seats
                </th>
                <th className="border border-gray-300 px-4 py-2">Price</th>
                <th className="border border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {selectedClasses.map((cls) => (
                <tr key={cls.name}>
                  <td className="border border-gray-300 px-4 py-2">
                    {cls.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {cls.instructor}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {cls.availableSeats}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {cls.price}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      onClick={() => handleDeleteClass(cls.name)}
                      className="mr-2">
                      Delete
                    </button>
                    <button
                      onClick={() => handlePayClass(cls.name)}
                      className="bg-blue-500 text-white px-4 py-2 rounded">
                      Pay
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No classes selected yet.</p>
        )}
      </div>
    </div>
  );
};

export default SelectedClasses;



// import { useState } from "react";
// import { useHistory } from "react-router-dom";

// const MySelectedClasses = () => {
//   const [selectedClasses, setSelectedClasses] = useState([
//     {
//       id: 1,
//       name: "Class A",
//       availableSeats: 5,
//     },
//     // Add more selected classes...
//   ]);

//   const history = useHistory();

//   const handleSuccessfulPayment = (updatedClassInfo) => {
//     // Update class information and remove the class from selected classes
//     const updatedClasses = selectedClasses.map((cls) =>
//       cls.id === updatedClassInfo.id ? updatedClassInfo : cls
//     );
//     setSelectedClasses(updatedClasses.filter((cls) => cls.id !== updatedClassInfo.id));
//   };

//   const handlePay = (classId) => {
//     const classInfo = selectedClasses.find((cls) => cls.id === classId);

//     // Redirect to the payment page
//     history.push(`/payment/${classId}`, { classInfo });
//   };

//   // ...

//   return (
//     // ...
//   );
// };

// export default MySelectedClasses;
