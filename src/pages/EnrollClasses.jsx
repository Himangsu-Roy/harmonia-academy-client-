// import React, { useState, useEffect } from "react";
// import useAxiosSecure from "../hooks/useAxiosSecure";
// import useAuth from "../hooks/useAuth";

// const EnrollClasses = () => {
//   const { user } = useAuth();
//   const [enrolledClasses, setEnrolledClasses] = useState([]);
//   const [axiosSecure] = useAxiosSecure();

//   console.log(user?.email);

//   useEffect(() => {
//     axiosSecure.get(`/enrolled/${user?.email}`).then((data) => {
//       setEnrolledClasses(data.data);
//       console.log(data.data);
//     });
//   }, [axiosSecure, enrolledClasses]);

//   return (
//     <div className="container mx-auto py-8">
//       {/* My Enrolled Classes */}
//       <div>
//         <h3 className="text-lg font-semibold mb-4">My Enrolled Classes</h3>
//         {enrolledClasses.length > 0 ? (
//           <ul>
//             {enrolledClasses.map((cls) => (
//               <li key={cls._id}>
//                 <p>{cls.className}</p>
//                 <p>Instructor: {cls.instructor}</p>
//                 <p>Available seats: {cls.availableSeats}</p>
//                 <p>Price: {cls.classPrice}</p>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>No classes enrolled yet.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default EnrollClasses;



// import React, { useState, useEffect } from "react";
// import useAxiosSecure from "../hooks/useAxiosSecure";
// import useAuth from "../hooks/useAuth";

// const EnrollClasses = () => {
//   const { user } = useAuth();
//   const [enrolledClasses, setEnrolledClasses] = useState([]);
//   const [axiosSecure] = useAxiosSecure();

//   useEffect(() => {
//     axiosSecure.get(`/enrolled/${user?.email}`).then((data) => {
//       setEnrolledClasses(data.data);
//     });
//   }, [axiosSecure, enrolledClasses]);

//   return (
//     <div className="container mx-auto py-8 text-black">
//       <div className="my-4">
//         <h3 className="text-lg font-semibold mb-4">My Enrolled Classes</h3>
//         {enrolledClasses.length > 0 ? (
//           <table className="min-w-full bg-white border border-gray-300">
//             <thead>
//               <tr>
//                 <th className="py-2 px-4 border-b font-semibold">Class Name</th>
//                 <th className="py-2 px-4 border-b font-semibold">Instructor</th>
//                 <th className="py-2 px-4 border-b font-semibold">
//                   Available Seats
//                 </th>
//                 <th className="py-2 px-4 border-b font-semibold">Price</th>
//               </tr>
//             </thead>
//             <tbody>
//               {enrolledClasses.map((cls) => (
//                 <tr key={cls._id} className="border-b">
//                   <td className="py-2 px-4">{cls.className}</td>
//                   <td className="py-2 px-4">{cls.instructor}</td>
//                   <td className="py-2 px-4">{cls.availableSeats}</td>
//                   <td className="py-2 px-4">{cls.classPrice}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <p className="mt-4">No classes enrolled yet.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default EnrollClasses;




import React, { useState, useEffect } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";

const EnrollClasses = () => {
  const { user } = useAuth();
  const [enrolledClasses, setEnrolledClasses] = useState([]);
  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get(`/enrolled/${user?.email}`).then((data) => {
      setEnrolledClasses(data.data);
    });
  }, [axiosSecure, enrolledClasses]);

  return (
    <div className="container mx-auto py-8">
      <div className="my-4">
        <h3 className="text-2xl font-semibold mb-4">My Enrolled Classes</h3>
        {enrolledClasses.length > 0 ? (
          <table className="min-w-full bg-white border border-gray-300">
            <thead className="text-black">
              <tr className="bg-gray-200">
                <th className="py-3 px-4 border-b font-semibold text-left">
                  Class Name
                </th>
                <th className="py-3 px-4 border-b font-semibold text-left">
                  Instructor
                </th>
                <th className="py-3 px-4 border-b font-semibold text-left">
                  Available Seats
                </th>
                <th className="py-3 px-4 border-b font-semibold text-left">
                  Price
                </th>
              </tr>
            </thead>
            <tbody className="text-black">
              {enrolledClasses.map((cls, index) => (
                <tr
                  key={cls._id}
                  className={`${index % 2 === 0 ? "bg-gray-100" : ""}`}>
                  <td className="py-3 px-4">{cls.className}</td>
                  <td className="py-3 px-4">{cls.instructor}</td>
                  <td className="py-3 px-4">{cls.availableSeats}</td>
                  <td className="py-3 px-4">{cls.classPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="mt-4 text-gray-600">No classes enrolled yet.</p>
        )}
      </div>
    </div>
  );
};

export default EnrollClasses;

