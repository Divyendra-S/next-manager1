"use client";
import Link from "next/link";
import { useContext } from "react";
import UserContext from "@/context/userContext";

function Home() {
  const { user } = useContext(UserContext);

  return (
    <div className="h-screen bg-gray-900 flex flex-col justify-center items-center space-y-6 text-gray-200">
      <h1 className="text-4xl font-bold">Welcome to Taskten</h1>

      {!user && (
        <>
          <p className="mb-6 text-center max-w-xl">
            Your go-to solution for task management. Organize your tasks with
            ease and efficiency.
          </p>
          <div className="flex space-x-4">
            <Link
              href="/login"
              className="px-5 py-2 border border-gray-300 hover:bg-gray-700 hover:text-gray-300 rounded-full">
              Login
            </Link>
            <Link
              href="/signUp"
              className="px-5 py-2 border border-gray-300 hover:bg-gray-700 hover:text-gray-300 rounded-full">
              Sign Up
            </Link>
          </div>
        </>
      )}

      {user && (
        <>
          <p className="mb-6 text-center max-w-xl">
            Hello, {user.username}! Manage your tasks efficiently.
          </p>
          <Link
            href="/addTask"
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-full">
            Add New Task
          </Link>
        </>
      )}
    </div>
  );
}

export default Home;
