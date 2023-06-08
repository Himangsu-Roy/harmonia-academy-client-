// import { useState } from "react";

// const ManageUsers = () => {
//   const [users, setUsers] = useState([
//     {
//       id: 1,
//       name: "John Doe",
//       email: "john.doe@example.com",
//       role: "student",
//     },
//     // Add more user objects here
//   ]);

//   const handleMakeInstructor = (userId) => {
//     // Update the role of the user with the given id to "instructor"
//     setUsers((prevUsers) =>
//       prevUsers.map((user) =>
//         user.id === userId ? { ...user, role: "instructor" } : user
//       )
//     );
//   };

//   const handleMakeAdmin = (userId) => {
//     // Update the role of the user with the given id to "admin"
//     setUsers((prevUsers) =>
//       prevUsers.map((user) =>
//         user.id === userId ? { ...user, role: "admin" } : user
//       )
//     );
//   };

//   return (
//     <div className="max-w-md mx-auto">
//       <h2 className="text-2xl font-bold mb-4">Manage Users</h2>
//       {users.map((user) => (
//         <div key={user.id} className="bg-white shadow-lg p-4 rounded-md mb-4 text-black">
//           <h3 className="text-lg font-bold">{user.name}</h3>
//           <p>Email: {user.email}</p>
//           <p>Role: {user.role}</p>
//           <div className="flex justify-end mt-4">
//             {user.role !== "instructor" && (
//               <button
//                 onClick={() => handleMakeInstructor(user.id)}
//                 disabled={user.role === "instructor"}
//                 className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
//                 Make Instructor
//               </button>
//             )}
//             {user.role !== "admin" && (
//               <button
//                 onClick={() => handleMakeAdmin(user.id)}
//                 disabled={user.role === "admin"}
//                 className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors ml-2">
//                 Make Admin
//               </button>
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ManageUsers;



import { useState } from "react";

const ManageUsers = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      role: "student",
    },
    // Add more user objects here
  ]);

  const handleMakeInstructor = (userId) => {
    // Update the role of the user with the given id to "instructor"
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, role: "instructor" } : user
      )
    );
  };

  const handleMakeAdmin = (userId) => {
    // Update the role of the user with the given id to "admin"
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, role: "admin" } : user
      )
    );
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Manage Users</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="py-2">Name</th>
              <th className="py-2">Email</th>
              <th className="py-2">Role</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="py-2">{user.name}</td>
                <td className="py-2">{user.email}</td>
                <td className="py-2">{user.role}</td>
                <td className="py-2">
                  {user.role !== "instructor" && (
                    <button
                      onClick={() => handleMakeInstructor(user.id)}
                      disabled={user.role === "instructor"}
                      className="bg-blue-500 text-white py-1 px-2 rounded-md hover:bg-blue-600 transition-colors mb-2 md:mb-0 md:mr-2">
                      Make Instructor
                    </button>
                  )}
                  {user.role !== "admin" && (
                    <button
                      onClick={() => handleMakeAdmin(user.id)}
                      disabled={user.role === "admin"}
                      className="bg-red-500 text-white py-1 px-2 rounded-md hover:bg-red-600 transition-colors">
                      Make Admin
                    </button>
                  )}
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
