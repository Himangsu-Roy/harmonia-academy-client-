import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { AiFillHome, AiOutlineUserAdd } from "react-icons/ai";
import {
  MdOutlineManageAccounts,
  MdClass,
  MdManageHistory,
} from "react-icons/md";

import { SiGoogleclassroom } from "react-icons/si";
import { FaUsersCog } from "react-icons/fa";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isInstructor, setIsInstructor] = useState(false);
  const { role } = useAuth();

  return (
    <div>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
        {/* <!-- Sidebar --> */}
        <div className="fixed flex flex-col left-0 w-14 hover:w-64 md:w-64 bg-blue-900 dark:bg-gray-900 h-full text-white transition-all duration-300 border-none z-10 ">
          <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
            <ul className="flex flex-col py-4 space-y-1">
              {/* Admin Dashboard */}
              {role === "admin" ? (
                <>
                  <li className="px-5 hidden md:block">
                    <div className="flex flex-row items-center h-8">
                      <div className="text-sm font-light tracking-wide text-gray-400 uppercase">
                        Admin
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link
                      to="manageclasses"
                      className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                      <span className="inline-flex justify-center items-center ml-4 ">
                        {/* <FaUsersCog className="w-5 h-5" /> */}
                        <svg
                          className="w-5 h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round">
                          <path d="M4 4h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zM14 4h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zM9 9h6M9 13h6M9 17h6" />
                        </svg>
                      </span>
                      <span className="ml-2 text-sm tracking-wide truncate">
                        Manage Classes
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="manageusers"
                      className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                      <span className="inline-flex justify-center items-center ml-4">
                        <MdOutlineManageAccounts className="w-5 h-5" />
                      </span>
                      <span className="ml-2 text-sm tracking-wide truncate">
                        Manage Users
                      </span>
                    </Link>
                  </li>
                </>
              ) : role === "isInstructor" ? (
                <>
                  <li className="px-5 hidden md:block">
                    <div className="flex flex-row items-center h-8">
                      <div className="text-sm font-light tracking-wide text-gray-400 uppercase">
                        Inastructors
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link
                      to="addclass"
                      className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                      <span className="inline-flex justify-center items-center ml-4">
                        <AiOutlineUserAdd className="w-5 h-5" />
                      </span>
                      <span className="ml-2 text-sm tracking-wide truncate">
                        Add a Class
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="myclasses"
                      className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                      <span className="inline-flex justify-center items-center ml-4">
                        <SiGoogleclassroom />
                      </span>
                      <span className="ml-2 text-sm tracking-wide truncate">
                        My Classes
                      </span>
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="px-5 hidden md:block">
                    <div className="flex flex-row items-center mt-5 h-8">
                      <div className="text-sm font-light tracking-wide text-gray-400 uppercase">
                        Students
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link
                      to="selectdclasses"
                      className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                      <span className="inline-flex justify-center items-center ml-4">
                        <MdClass />
                      </span>
                      <span className="ml-2 text-sm tracking-wide truncate">
                        My Selected Classes
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="enrollclasses"
                      className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                      <span className="inline-flex justify-center items-center ml-4">
                        <svg
                          className="w-5 h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M8 12l2 2l4-4" />
                        </svg>
                      </span>
                      <span className="ml-2 text-sm tracking-wide truncate">
                        My Enrolled Classes
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="paymenthistory"
                      className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                      <span className="inline-flex justify-center items-center ml-4">
                        <MdManageHistory className="w-5 h-5" />
                      </span>
                      <span className="ml-2 text-sm tracking-wide truncate">
                        Payment History
                      </span>
                    </Link>
                  </li>
                </>
              )}
            </ul>
            <div className="grid justify-center">
              <Link
                to="/"
                title="Home"
                className=" flex flex-row justify-center items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-transparent hover:border-blue-500 dark:hover:border-gray-800">
                <span className="inline-flex justify-center items-center">
                  <AiFillHome className="w-5 h-5" />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate hidden md:block">
                  Home
                </span>
              </Link>

              <p className=" px-5 py-3 hidden md:block text-center text-xs">
                Copyright @2023
              </p>
            </div>
          </div>
        </div>
        {/* <!-- ./Sidebar --> */}

        {/* Content */}
        <div className="h-full ml-14 mb-10 md:ml-64">
          <Outlet />
        </div>
        {/* Content */}
      </div>
    </div>
  );
};

export default Dashboard;
