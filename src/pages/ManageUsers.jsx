

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
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Manage Users</h2>
//       <div className="overflow-x-auto">
//         <table className="w-full">
//           <thead>
//             <tr>
//               <th className="py-2">Name</th>
//               <th className="py-2">Email</th>
//               <th className="py-2">Role</th>
//               <th className="py-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user) => (
//               <tr key={user.id}>
//                 <td className="py-2">{user.name}</td>
//                 <td className="py-2">{user.email}</td>
//                 <td className="py-2">{user.role}</td>
//                 <td className="py-2">
//                   {/* {user.role !== "instructor" && (
//                   )} */}
//                   <button
//                     onClick={() => handleMakeInstructor(user.id)}
//                     disabled={user.role === "instructor"}
//                     className={` py-1 px-2 rounded-md  transition-colors mb-2 md:mb-0 md:mr-2 ${
//                       user.role === "instructor"
//                         ? "bg-blue-200 text-white"
//                         : "bg-blue-500 text-white hover:bg-blue-600"
//                     }`}>
//                     Make Instructor
//                   </button>
//                   {/* {user.role !== "admin" && (
//                   )} */}
//                   <button
//                     onClick={() => handleMakeAdmin(user.id)}
//                     disabled={user.role === "admin"}
//                     className={` text-white py-1 px-2 rounded-md  transition-colors ${
//                       user.role === "admin"
//                         ? "bg-red-200 text-white"
//                         : "bg-red-500 text-white hover:bg-red-600"
//                     } `}>
//                     Make Admin
//                   </button>
//                 </td>
                
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
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
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, role: "instructor" } : user
      )
    );
  };

  const handleMakeAdmin = (userId) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, role: "admin" } : user
      )
    );
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Manage Users</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg text-black">
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
              <tr key={user.id}>
                <td className="py-2 px-4">{user.name}</td>
                <td className="py-2 px-4">{user.email}</td>
                <td className="py-2 px-4">{user.role}</td>
                <td className="py-2 px-4 flex gap-4">
                  <button
                    onClick={() => handleMakeInstructor(user.id)}
                    disabled={user.role === "instructor"}
                    className={`py-1 px-2 rounded-md transition-colors mb-2 md:mb-0 md:mr-2  ${
                      user.role === "instructor"
                        ? "bg-blue-200 text-white"
                        : "bg-blue-500 text-white hover:bg-blue-600"
                    }`}>
                    Make Instructor
                  </button>
                  <button
                    onClick={() => handleMakeAdmin(user.id)}
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

