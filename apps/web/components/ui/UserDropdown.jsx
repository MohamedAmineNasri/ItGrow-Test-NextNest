"use client";
import { useState, useEffect } from "react";
import { deleteSession, getSession } from "@/lib/session";
import { Button } from "./button";
import Link from "next/link";

const UserDropdown = () => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchSession = async () => {
      const sessionData = await getSession();
      setSession(sessionData);
      setLoading(false);
    };

    fetchSession();
  }, []);

  const handleLogout = async () => {
    await deleteSession();
    setSession(null);
  };

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-200 flex justify-center items-center dark:bg-gray-500">
      {!session || !session.user ? (
        // Render Sign-in Button if no session exists
        <div className="sm:flex hidden">
          <Button
            asChild
            className="flex items-center justify-center px-[20px] py-0 mx-auto w-[94px] h-[40px] bg-[#6138BD] border border-[#6138BD] rounded-[10px] hover:bg-[#6138BD] hover:border-[#6138BD]"
          >
            <Link
              href="/auth/signin"
              className="text-[17px] font-medium leading-[24px] tracking-[0.2px] text-[#FFFFFF] hover:text-[#FFFFFF]"
            >
              Sign in
            </Link>
          </Button>
        </div>
      ) : (
        // Render User Dropdown if session exists
        <div className="bg-white dark:bg-gray-800 w-64 shadow flex justify-center items-center">
          <div
            onClick={() => setOpen(!open)}
            className={`relative border-b-4 border-transparent py-3 ${open ? "border-indigo-700 transform transition duration-300" : ""}`}
          >
            <div className="flex justify-center items-center space-x-3 cursor-pointer">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 dark:border-white border-gray-900">
                <img
                  src={"https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"}
                  alt="User"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="font-semibold dark:text-white text-gray-900 text-lg">
                <div className="cursor-pointer">{session.user.name}</div>
              </div>
            </div>

            {/* Dropdown Menu */}
            {open && (
              <div className="absolute w-60 px-5 py-3 dark:bg-gray-800 bg-white rounded-lg shadow border dark:border-transparent mt-5 transition-transform duration-200 z-20">
                <ul className="space-y-3 dark:text-white">
                  {/* <li className="font-medium">
                    <a
                      href="#"
                      className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-indigo-700"
                    >
                      <div className="mr-3">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          ></path>
                        </svg>
                      </div>
                      Account
                    </a>
                  </li> */}
                  <li className="font-medium">
                    <Link
                      href="/dashboard"
                      className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-indigo-700"
                    >
                      <div className="mr-3">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                        </svg>
                      </div>
                      Dashboard
                    </Link>
                  </li>
                  <hr className="dark:border-gray-700" />
                  <li className="font-medium">
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full transform transition-colors duration-200 border-r-4 border-transparent hover:border-red-600 text-red-600"
                    >
                      <div className="mr-3">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                          ></path>
                        </svg>
                      </div>
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
