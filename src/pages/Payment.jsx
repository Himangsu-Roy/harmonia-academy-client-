import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const PaymentPage = ({ classId, handleSuccessfulPayment }) => {
  const history = useHistory();

  useEffect(() => {
    // Perform the payment request and redirect the user to the payment gateway

    // Simulate a successful payment after a short delay
    const simulatePayment = setTimeout(() => {
      // Update the class information in the database
      handleSuccessfulPayment(classId);

      // Redirect the user to the enrolled classes page
      history.push("/my-enrolled-classes");
    }, 2000);

    return () => {
      clearTimeout(simulatePayment);
    };
  }, [classId, handleSuccessfulPayment, history]);

  return (
    <div>
      <h2>Processing Payment...</h2>
      {/* You can show a loading spinner or any other UI indication here */}
    </div>
  );
};

export default PaymentPage;
