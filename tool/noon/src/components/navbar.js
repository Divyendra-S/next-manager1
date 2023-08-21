"use client";
import { logout } from "../services/userservice";
import { useRouter } from "next/navigation";
import UserProvider from "../context/userProvider";
import { useContext } from "react";
import UserContext from "@/context/userContext";
import { toast } from "react-toastify";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();
  const { user, setUser } = useContext(UserContext);
  async function dologOut() {
    try {
      const response = await logout();
      setUser(undefined);
      router.push("/login");
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  }
  return (
    <nav className="flex justify-between items-center bg-gray-900 p-4 shadow-md">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-200">
          Taskten.
        </h1>
      </div>
      <div className="text-xl mt-2 md:text-2xl">
        <ul className="flex space-x-4">
          {user && (
            <>
              <li>
                <Link
                  href="/addTask"
                  className="text-gray-200 hover:text-blue-500">
                  Add Task
                </Link>
              </li>
              <li>
                <Link
                  href="/show-task"
                  className="text-gray-200 hover:text-blue-500">
                  Show Task
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div>
        <ul className="flex space-x-4">
          {user && (
            <>
              <li>
                <button
                  onClick={dologOut}
                  className=" bg-cyan-500 text-white px-3 py-1 rounded hover:bg-red-700 focus:outline-none">
                  LogOut
                </button>
              </li>
            </>
          )}
          {!user && (
            <>
              <li>
                <Link
                  href="/login"
                  className="text-gray-200 hover:text-blue-500">
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/signUp"
                  className="text-gray-200 hover:text-blue-500">
                  SignUp
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>

    // <nav className="flex justify-around">
    //   <div>
    //     <h1>Taskten.</h1>
    //   </div>
    //   <div>
    //     <ul>
    //       {user && (
    //         <>
    //           <li>
    //             <Link href="/addTask">Add Task</Link>
    //           </li>
    //           <Link href="/show-task">Show Task</Link>
    //         </>
    //       )}
    //     </ul>
    //   </div>
    //   <div>
    //     <ul>
    //       {user && (
    //         <>
    //           <li>
    //             <button onClick={dologOut}>LogOut</button>
    //           </li>
    //         </>
    //       )}
    //       {!user && (
    //         <>
    //           <li>
    //             <Link href="/login">login</Link>
    //           </li>
    //           <li>
    //             <Link href="/signUp">signUp</Link>
    //           </li>
    //         </>
    //       )}
    //     </ul>
    //   </div>
    // </nav>
  );
};
export default Navbar;
