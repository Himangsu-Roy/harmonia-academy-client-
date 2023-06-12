import { useEffect, useState } from "react";
import { getUsers, setRole } from "../api/users";
import useAuth from "../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";

const ManageUsers = () => {
  const { user: userName, loading } = useAuth();
  const [users, setUsers] = useState([]);
  const [axiosSecure] = useAxiosSecure();
  
  const { refetch, data: userData = [] } = useQuery({
    queryKey: ["user", userName?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(
        `${import.meta.env.VITE_API_URL}/users`
      );
      console.log("res from axios", res.data);
      return res.data;
    },
  });
  
 

  useEffect(() => {
    setUsers(userData);
  }, [userData]);




  const handleMakeInstructor = (userId) => {
    // setUsers((prevUsers) =>
    //   prevUsers.map((user) =>
    //     user.id === userId ? { ...user, role: "instructor" } : user
    //   )
    // );

    setRole(userId, { role: "instructor" })
    .then(data => {
      console.log(data)
      refetch()
    })

  };

  const handleMakeAdmin = (userId) => {
    // setUsers((prevUsers) =>
    //   prevUsers.map((user) =>
    //     user._id === userId ? { ...user, role: "admin" } : user
    //   )
    // );
    setRole(userId, { role: "admin" })
    .then(data => {
      console.log(data)
      refetch()
    })
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Manage Users</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md text-black">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Role</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {users.map((user) => (
              <tr key={user._id}>
                <td className="py-2 px-4">{userName?.displayName}</td>
                <td className="py-2 px-4">{user.email}</td>
                <td className="py-2 px-4">{user.role}</td>
                <td className="py-2 px-4 flex gap-4 justify-center">
                  <button
                    onClick={() => handleMakeInstructor(user.email)}
                    disabled={user.role === "instructor"}
                    className={`py-1 px-2 rounded-md transition-colors mb-2 md:mb-0 md:mr-2  ${
                      user.role === "instructor"
                        ? "bg-blue-200 text-white"
                        : "bg-blue-500 text-white hover:bg-blue-600"
                    }`}>
                    Make Instructor
                  </button>
                  <button
                    onClick={() => handleMakeAdmin(user.email)}
                    disabled={user.role === "admin"}
                    className={`py-1 px-2 rounded-md transition-colors ${
                      user.role === "admin"
                        ? "bg-red-200 text-white"
                        : "bg-red-500 text-white hover:bg-red-600"
                    }`}>
                    Make Admin
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
