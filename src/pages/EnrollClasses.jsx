import React, { useState, useEffect } from "react";

const EnrollClasses = () => {
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [enrolledClasses, setEnrolledClasses] = useState([]);

  useEffect(() => {
    // Simulating fetching enrolled classes from the server
    // You can replace this with your actual data fetching logic
    const fetchEnrolledClasses = async () => {
      try {
        // Make an API call to fetch the enrolled classes for the student
        const response = await fetch("/api/enrolled-classes");
        const data = await response.json();

        // Update the enrolled classes state with the fetched data
        setEnrolledClasses(data);
      } catch (error) {
        console.log("Error fetching enrolled classes:", error);
      }
    };

    fetchEnrolledClasses();
  }, []);

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
      <h2 className="text-2xl font-bold mb-4">Student Dashboard</h2>

      {/* My Selected Classes */}
      <div>
        <h3 className="text-lg font-semibold mb-4">My Selected Classes</h3>
        {/* ... */}
      </div>

      {/* My Enrolled Classes */}
      <div>
        <h3 className="text-lg font-semibold mb-4">My Enrolled Classes</h3>
        {enrolledClasses.length > 0 ? (
          <ul>
            {enrolledClasses.map((cls) => (
              <li key={cls.name}>
                <p>{cls.name}</p>
                <p>Instructor: {cls.instructor}</p>
                <p>Available seats: {cls.availableSeats}</p>
                <p>Price: {cls.price}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No classes enrolled yet.</p>
        )}
      </div>
    </div>
  );
};

export default EnrollClasses;
