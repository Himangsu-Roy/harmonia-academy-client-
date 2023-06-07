// // import React, { useState } from "react";
// // import { Link } from "react-router-dom";

// // const Navbar = () => {
// //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

// //   const toggleMobileMenu = () => {
// //     setIsMobileMenuOpen(!isMobileMenuOpen);
// //   };

// //   return (
// //     <nav className="bg-gradient-to-r from-purple-900 to-indigo-900">
// //       <div className="container mx-auto flex items-center justify-between py-4">
// //         <Link to="/" className="text-white text-2xl font-bold tracking-wider">
// //           Harmonia Academy
// //         </Link>
// //         <div className="relative flex">
// //           <button
// //             className="block text-white hover:text-gray-300 focus:text-gray-300 focus:outline-none"
// //             onClick={toggleMobileMenu}>
// //             <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
// //               {isMobileMenuOpen ? (
// //                 <path
// //                   d="M6 18L18 6M6 6l12 12"
// //                   strokeWidth="2"
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                 />
// //               ) : (
// //                 <path
// //                   d="M4 6h16M4 12h16M4 18h16"
// //                   strokeWidth="2"
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                 />
// //               )}
// //             </svg>
// //           </button>
// //           <ul
// //             className={`${
// //               isMobileMenuOpen ? "block" : "md:hidden"
// //             } absolute bg-gradient-to-r from-purple-900 to-indigo-900 top-full left-0 right-0 py-2 px-4 space-y-2 sm:space-y-0 sm:flex sm:space-x-4 lg:static lg:flex lg:space-x-4 `}>
// //             <li>
// //               <Link to="/about" className="text-white hover:text-gray-300">
// //                 About Us
// //               </Link>
// //             </li>
// //             <li>
// //               <Link to="/courses" className="text-white hover:text-gray-300">
// //                 Courses
// //               </Link>
// //             </li>
// //             <li>
// //               <Link
// //                 to="/instructors"
// //                 className="text-white hover:text-gray-300">
// //                 Instructors
// //               </Link>
// //             </li>
// //             <li>
// //               <Link to="/events" className="text-white hover:text-gray-300">
// //                 Events
// //               </Link>
// //             </li>
// //             <li>
// //               <Link
// //                 to="/testimonials"
// //                 className="text-white hover:text-gray-300">
// //                 Testimonials
// //               </Link>
// //             </li>
// //             <li>
// //               <Link to="/contact" className="text-white hover:text-gray-300">
// //                 Contact
// //               </Link>
// //             </li>
// //           </ul>
// //         </div>
// //         <Link
// //           to="/signup"
// //           className="bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600">
// //           Sign Up
// //         </Link>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// // import React, { useState } from "react";
// // import { Link } from "react-router-dom";

// // const Navbar = () => {
// //     const [isAuthenticated, setIsAuthenticated] = useState()
// //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

// //   const toggleMobileMenu = () => {
// //     setIsMobileMenuOpen(!isMobileMenuOpen);
// //   };

// //   return (
// //     <nav className="bg-gradient-to-r from-purple-900 to-indigo-900">
// //       <div className="container mx-auto flex items-center justify-between py-4">
// //         <Link to="/" className="text-white text-2xl font-bold tracking-wider">
// //           Harmonia Academy
// //         </Link>
// //         <div className="relative flex overflow-hidden">
// //           <button
// //             className="block text-white hover:text-gray-300 focus:text-gray-300 focus:outline-none"
// //             onClick={toggleMobileMenu}>
// //             <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">

// //               {isMobileMenuOpen ? (
// //                 <>
// //                 <path
// //                   d="M6 18L18 6M6 6l12 12"
// //                   strokeWidth="2"
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                 />
// //                 <p>menu</p>
// //                 </>
// //               ) : (
// //                 <path
// //                   d="M4 6h16M4 12h16M4 18h16"
// //                   strokeWidth="2"
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                 />
// //               )}
// //             </svg>
// //           </button>
// //           <ul
// //             className={`${
// //               isMobileMenuOpen ? "block" : "hidden"
// //             } absolute bg-gradient-to-r from-purple-900 to-indigo-900 top-[50px]  py-2 px-4 space-y-2 sm:space-y-0 sm:flex sm:space-x-4 lg:static lg:flex lg:space-x-4 `}>
// //             <li>
// //               <Link to="/about" className="text-white hover:text-gray-300">
// //                 Home
// //               </Link>
// //             </li>
// //             <li>
// //               <Link to="/courses" className="text-white hover:text-gray-300">
// //                 Instructors
// //               </Link>
// //             </li>
// //             <li>
// //               <Link
// //                 to="/instructors"
// //                 className="text-white hover:text-gray-300">
// //                 Classes
// //               </Link>
// //             </li>
// //             <li>
// //               <Link to="/events" className="text-white hover:text-gray-300">
// //                 Dashboard
// //               </Link>
// //             </li>

// //           </ul>
// //         </div>
// //         <div className=" items-center hidden lg:block">
// //           {/* <Link
// //             to="/dashboard"
// //             className="hidden md:block bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600">
// //             Dashboard
// //           </Link> */}
// //           <Link
// //             to={isAuthenticated ? "/profile" : "/login"}
// //             className="bg-purple-500 text-white py-2 px-4 rounded-lg ml-4 hover:bg-purple-600">
// //             {isAuthenticated ? (
// //               <img
// //                 src={userProfilePicture}
// //                 alt="User Profile"
// //                 className="w-8 h-8 rounded-full"
// //               />
// //             ) : (
// //               "Login"
// //             )}
// //           </Link>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav
//       x-data={{ isOpen: false }}
//       className="relative bg-white shadow dark:bg-gray-800">
//       <div className="container px-6 py-4 mx-auto">
//         <div className="lg:flex lg:items-center lg:justify-between">
//           <div className="flex items-center justify-between">
//             <a href="#">
//               <img
//                 className="w-auto h-6 sm:h-7"
//                 src="https://merakiui.com/images/full-logo.svg"
//                 alt=""
//               />
//             </a>

//             <div className="flex lg:hidden">
//               <button
//                 x-cloak
//                 onClick={toggleMenu}
//                 type="button"
//                 className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
//                 aria-label="toggle menu">
//                 {!isOpen ? (
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="w-6 h-6"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth="2">
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M4 6h16M4 12h16M4 18h16"
//                     />
//                   </svg>
//                 ) : (
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="w-6 h-6"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth="2">
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 )}
//               </button>
//             </div>
//           </div>

//           <div
//             x-cloak
//             className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto ${
//               isOpen
//                 ? "translate-x-0 opacity-100"
//                 : "opacity-0 -translate-x-full"
//             }`}>
//             <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8 ">
//               <a
//                 href="#"
//                 className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 ">
//                 Join Slack
//               </a>
//               <a
//                 href="#"
//                 className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
//                 Browse Topics
//               </a>
//               <a
//                 href="#"
//                 className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
//                 Random Item
//               </a>
//               <a
//                 href="#"
//                 className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
//                 Experts
//               </a>
//             </div>

//             <div className="flex items-center mt-4 lg:mt-0">
//               <button
//                 className="hidden mx-4 text-gray-600 transition-colors duration-300 transform lg:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none"
//                 aria-label="show notifications">
//                 <svg
//                   className="w-6 h-6"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg">
//                   <path
//                     d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </button>

//               <button
//                 type="button"
//                 className="flex items-center focus:outline-none"
//                 aria-label="toggle profile dropdown">
//                 <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
//                   <img
//                     src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
//                     className="object-cover w-full h-full"
//                     alt="avatar"
//                   />
//                 </div>

//                 <h3 className="mx-2 text-gray-700 dark:text-gray-200 lg:hidden">
//                   Khatab wedaa
//                 </h3>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-900 to-indigo-900">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link to="/" className="text-white text-2xl font-bold tracking-wider">
          Harmonia Academy
        </Link>
        <div className="relative flex">
          <button
            className="block text-white hover:text-gray-300 focus:text-gray-300 focus:outline-none"
            onClick={toggleMenu}>
            {isOpen ? (
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path
                  d="M6 18L18 6M6 6l12 12"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
          <ul
            className={`${
              isOpen ? "block" : "hidden"
            } absolute bg-gradient-to-r from-purple-900 to-indigo-900 top-full left-0 right-0 py-2 px-4 space-y-2 sm:space-y-0 sm:flex sm:space-x-4 lg:static lg:flex lg:space-x-4`}>
            <li>
              <Link to="/about" className="text-white hover:text-gray-300">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/courses" className="text-white hover:text-gray-300">
                Courses
              </Link>
            </li>
            <li>
              <Link
                to="/instructors"
                className="text-white hover:text-gray-300">
                Instructors
              </Link>
            </li>
            <li>
              <Link to="/events" className="text-white hover:text-gray-300">
                Events
              </Link>
            </li>
            <li>
              <Link
                to="/testimonials"
                className="text-white hover:text-gray-300">
                Testimonials
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-gray-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <Link
          to="/signup"
          className="bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600">
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
