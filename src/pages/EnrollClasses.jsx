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
      console.log(data)
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
                  <td className="py-3 px-4">{cls.instructorName}</td>
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

