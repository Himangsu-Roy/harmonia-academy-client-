import React, { useEffect, useState } from "react";
import { deleteSelectClass, getSelectdClass } from "../api/class";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const SelectedClasses = () => {
  const [selectedClasses, setSelectedClasses] = useState([]);

  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
console.log(user)
  const { refetch, data = [] } = useQuery({
    queryKey: ["select", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`${import.meta.env.VITE_API_URL}/selected/${user?.email}`);
      
      return res.data;
    },
  });

  useEffect(() => {
    getSelectdClass(user?.email).then((data) => {
      setSelectedClasses(data);
      console.log(data);
    });
  }, [selectedClasses, data]);



  const handleDeleteClass = (id) => {
    deleteSelectClass(id).then((data) => {
      console.log(data);
      refetch();
    });
    
  };

  return (
    <div className="container mx-auto py-8">
      {/* My Selected Classes */}
      <div>
        <h3 className="text-lg font-semibold mb-4">My Selected Classes</h3>
        {selectedClasses.length > 0 ? (
          <table className="w-full border border-gray-300 ">
            <thead className="text-black">
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
                <tr key={cls._id}>
                  <td className="border border-gray-300 px-4 py-2">
                    {cls.className}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {cls.instructorName}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {cls.availableSeats}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    ${cls.price}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <button
                      onClick={() => handleDeleteClass(cls._id)}
                      className="mr-2 bg-blue-500 text-white px-4 py-2 rounded">
                      Delete
                    </button>
                    <Link to={`/dashboard/payment/${cls._id}`}>
                      <button className="bg-blue-500 text-white px-4 py-2 rounded">
                        Pay
                      </button>
                    </Link>
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
