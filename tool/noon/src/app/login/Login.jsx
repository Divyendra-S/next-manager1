"use client";

import UserContext from "@/context/userContext";
import { useContext } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { login } from "@/services/userservice";

const Login = () => {
  const router = useRouter();
  const [userl, setUserl] = useState({
    email: "",
    password: "",
  });
  const { user, setUser } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userl.email.trim() === "" || userl.password.trim() === "") {
      toast.info("please Enter valid data", {
        position: "top-center",
      });
      return;
    }
    try {
      const loggedIn = await login(userl);
      setUser(loggedIn.user);
      toast.success(loggedIn.message);
      router.push("/");
    } catch (error) {
      console.log(error);
      toast.error(error.response.Data.message, {
        position: "top-right",
      });
    }
  };
  return (
    <div className="flex p-5 md:p-20 justify-center items-center h-screen bg-slate-900">
      <form
        className=" bg-slate-800 rounded-2xl p-4 flex  text-slate-200 flex-col justify-between  space-y-5 flex-grow max-w-xl md:max-w-3xl h-[400px]"
        action="#!"
        onSubmit={handleSubmit}>
        <h1 className="text-center text-3xl">Login</h1>
        <div className="flex flex-col space-y-4  justify-center items-center flex-grow">
          <div className="flex flex-col space-y-2 md:w-[400px] w-[300px]">
            <lable htmlFor="emailId">email</lable>
            <input
              className="rounded-2xl p-2 text-black "
              type="text"
              placeholder="Email"
              id="emailId"
              name="emailId"
              value={userl.email}
              onChange={(e) => {
                setUserl({
                  ...userl,
                  email: e.target.value,
                });
              }}
            />
          </div>
          <div className="flex flex-col space-y-2 md:w-[400px] w-[300px]">
            <lable htmlFor="password">password</lable>
            <input
              className="rounded-2xl p-2 text-black"
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              value={userl.password}
              onChange={(e) => {
                setUserl({
                  ...userl,
                  password: e.target.value,
                });
              }}
            />
          </div>
        </div>
        <div className="text-center p-2">
          <button
            className="rounded-full bg-sky-500 p-3 w-[150px] max-w-sm"
            type="submit">
            login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
