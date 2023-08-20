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
    <nav className="flex justify-around">
      <div>
        <h1>Taskten.</h1>
      </div>
      <div>
        <ul>
          {user && (
            <>
              <li>
                <Link href="/addTask">Add Task</Link>
              </li>
              <Link href="/show-task">Show Task</Link>
            </>
          )}
        </ul>
      </div>
      <div>
        <ul>
          {user && (
            <>
              <li>
                <button onClick={dologOut}>LogOut</button>
              </li>
            </>
          )}
          {
            <>
              <li>
                <Link href="/login">login</Link>
              </li>
              <li>
                <Link href="/signUp">signUp</Link>
              </li>
            </>
          }
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
