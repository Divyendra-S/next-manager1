"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { signUp } from "@/services/userservice";

const SignUp = () => {
  const router = useRouter();
  const [signupdata, setSignup] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await signUp(signupdata);
      toast.success("signed up successfully", {
        position: "top-center",
      });
      router.push("/login");
    } catch (error) {
      toast.error("failed to signup", {
        position: "top-center",
      });
      console.log(error);
    }
  };
  const reset = () => {
    setSignup({
      name: "",
      email: "",
      password: "",
      about: "",
    });
  };
  return (
    <div class=" p-6 h-screen bg-gray-900 flex justify-center items-center">
      <form
        class=" flex flex-grow shadow-2xl shadow-slate-500 hover:shadow-slate-600   h-[500px] max-w-2xl flex-col text-slate-100  items-center
        bg-slate-800 rounded-xl p-6 w-96 transform duration-200 hover:scale-105  justify-between"
        onSubmit={handleSubmit}>
        <div class=" flex flex-col space-y-4 ">
          <div class="flex flex-col space-y-1  md:w-[400px] w-[350px]">
            <label>Name</label>
            <input
              class="rounded-xl p-2 bg-slate-700  focus:outline-none focus:border-blue-500"
              type="text"
              placeholder="Enter name"
              id="name"
              name="name"
              value={signupdata.name}
              onChange={(e) =>
                setSignup({ ...signupdata, name: e.target.value })
              }
            />
          </div>
          <div class="flex flex-col space-y-1  md:w-[400px] w-[350px]">
            <label>Email</label>
            <input
              class="rounded-xl p-2 bg-slate-700 focus:outline-none focus:border-blue-500"
              type="email"
              placeholder="Enter email"
              id="email"
              name="email"
              value={signupdata.email}
              onChange={(e) => {
                setSignup({ ...signupdata, email: e.target.value });
              }}
            />
          </div>
          <div class="flex flex-col space-y-1  md:w-[400px] w-[350px]">
            <label>Password</label>
            <input
              class="rounded-xl p-2 bg-slate-700 focus:outline-none focus:border-blue-500"
              type="password"
              placeholder="Enter password"
              id="password"
              name="password"
              value={signupdata.password}
              onChange={(e) => {
                setSignup({ ...signupdata, password: e.target.value });
              }}
            />
          </div>
          <div class="flex flex-col space-y-1  md:w-[400px] w-[350px]">
            <label>About</label>
            <input
              class="rounded-xl p-2 bg-slate-700 focus:outline-none focus:border-blue-500"
              type="text"
              placeholder="Enter about"
              id="about"
              name="about"
              value={signupdata.about}
              onChange={(e) => {
                setSignup({ ...signupdata, about: e.target.value });
              }}
            />
          </div>
        </div>
        <div class="">
          <div class="flex justify-center items-end space-x-3">
            <div class=" rounded-2xl bg-cyan-500 p-2 transform duration-200 hover:scale-110">
              <button type="submit">SignUp</button>
            </div>
            <div class=" rounded-2xl bg-cyan-500 p-2 transform duration-200 hover:scale-110">
              <button type="button" onClick={reset}>
                reset
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
