import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PaymentHistory = () => {
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [enrolledClasses, setEnrolledClasses] = useState([]);
  const [paymentHistory, setPaymentHistory] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    // Simulating fetching enrolled classes and payment history from the server
    // You can replace this with your actual data fetching logic
    const fetchData = async () => {
      try {
        // Make an API call to fetch the enrolled classes for the student
        const enrolledClassesResponse = await fetch("/api/enrolled-classes");
        const enrolledClassesData = await enrolledClassesResponse.json();

        // Make an API call to fetch the payment history for the student
        const paymentHistoryResponse = await fetch("/api/payment-history");
        const paymentHistoryData = await paymentHistoryResponse.json();

        // Update the enrolled classes and payment history states with the fetched data
        setEnrolledClasses(enrolledClassesData);
        setPaymentHistory(paymentHistoryData);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
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

  const handlePay = (className) => {
    // Find the selected class from the list of selected classes
    const selectedClass = selectedClasses.find((cls) => cls.name === className);

    // Perform payment logic (e.g., redirect to payment page)
    // ...

    // Simulating a successful payment
    const updatedEnrolledClasses = [...enrolledClasses, selectedClass];
    const updatedPaymentHistory = [
      {
        class: selectedClass,
        date: new Date().toISOString(),
      },
      ...paymentHistory,
    ];

    // Update the enrolled classes and payment history states
    setEnrolledClasses(updatedEnrolledClasses);
    setPaymentHistory(updatedPaymentHistory);

    // Remove the class from the list of selected classes
    const updatedSelectedClasses = selectedClasses.filter(
      (cls) => cls.name !== className
    );
    setSelectedClasses(updatedSelectedClasses);

    // Redirect to the My Enrolled Classes page
    navigate("/dashboard/enrollclasses");
  };

  return (
    <div className="container mx-auto py-8">

      {/* My Selected Classes */}
      {/* <div>
        <h3 className="text-lg font-semibold mb-4">My Selected Classes</h3>
        
      </div> */}

      {/* My Enrolled Classes */}
      {/* <div>
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
      </div> */}

      {/* Payment History */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Payment History</h3>
        {paymentHistory.length > 0 ? (
          <ul>
            {paymentHistory.map((payment) => (
              <li key={payment.date}>
                <p>Class: {payment.class.name}</p>
                <p>Date: {payment.date}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No payment history available.</p>
        )}
      </div>
    </div>
  );
};

export default PaymentHistory;
