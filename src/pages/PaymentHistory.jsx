
// import React, { useState, useEffect } from "react";
// import useAxiosSecure from "../hooks/useAxiosSecure";
// import useAuth from "../hooks/useAuth";

// const PaymentHistory = () => {
//   const { user } = useAuth();
//   const [paymentHistory, setPaymentHistory] = useState([]);
//   const [axiosSecure] = useAxiosSecure();

//   useEffect(() => {
//     axiosSecure.get(`/payments`).then((data) => {
//       setPaymentHistory(data.data);
//     });
//   }, [axiosSecure, user]);

//   return (
//     <div className="container mx-auto py-8">
//       <div className="my-4">
//         <h3 className="text-2xl font-semibold mb-4">Payment History</h3>
//         {paymentHistory.length > 0 ? (
//           <table className="min-w-full bg-white border border-gray-300">
//             <thead className="text-black">
//               <tr className="bg-gray-200">
//                 <th className="py-3 px-4 border-b font-semibold text-left">Email</th>
//                 <th className="py-3 px-4 border-b font-semibold text-left">Payment Date</th>
//                 <th className="py-3 px-4 border-b font-semibold text-left">Transation id</th>
//                 <th className="py-3 px-4 border-b font-semibold text-left">Amount</th>
//               </tr>
//             </thead>
//             <tbody className="text-black">
//               {paymentHistory.map((payment, index) => (
//                 <tr key={payment._id} className={`${index % 2 === 0 ? "bg-gray-100" : ""}`}>
//                   <td className="py-3 px-4">{payment.email}</td>
//                   <td className="py-3 px-4">{payment.date}</td>
//                   <td className="py-3 px-4">{payment.transation}</td>
//                   <td className="py-3 px-4">
//                     {/* <span
//                       className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${
//                         payment.status === "paid"
//                           ? "bg-green-500 text-white"
//                           : "bg-red-500 text-white"
//                       }`}
//                     >
//                       {payment.status}
//                     </span> */}
//                     {payment.amount}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <p className="mt-4 text-gray-600">No payment history available.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PaymentHistory;



import React, { useState, useEffect } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";

const PaymentHistory = () => {
  const { user } = useAuth();
  const [paymentHistory, setPaymentHistory] = useState([]);
  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get(`/payments`).then((data) => {
      setPaymentHistory(data.data);
    });
  }, [axiosSecure, user]);

  return (
    <div className="container mx-auto py-8">
      <div className="my-4 overflow-x-auto">
        <h3 className="text-2xl font-semibold mb-4">Payment History</h3>
        {paymentHistory.length > 0 ? (
          <div className="shadow overflow-x-auto border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Payment Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Transaction ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {paymentHistory.map((payment, index) => (
                  <tr
                    key={payment._id}
                    className={`${index % 2 === 0 ? "bg-gray-50" : ""}`}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {payment.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {payment.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {payment.transactionId}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                     ${payment.classPrice}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="mt-4 text-gray-600">No payment history available.</p>
        )}
      </div>
    </div>
  );
};

export default PaymentHistory;
