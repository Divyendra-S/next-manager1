"use client";
import { updateTask } from "@/services/taskservice";
import UserContext from "@/context/userContext";
import { useContext } from "react";
import { FiDelete } from "react-icons/fi";
import { LuClipboardCheck } from "react-icons/lu";

const Taasks = ({ task, key, deleteItem }) => {
  const { user } = useContext(UserContext);
  const deleteTasks = (taskId) => {
    deleteItem(taskId);
  };
  const clickHandler = async () => {
    const updatedStatus = task.status === "completed" ? "pending" : "completed";
    const updatedTask = { ...task, status: updatedStatus };
    await updateTask(task._id, updatedTask);
  };

  return (
    <div className=" transform duration-200 hover:scale-105 shadow-2xl shadow-slate-500 hover:shadow-slate-600  bg-gray-800 w-[400px] md:w-[700px] rounded-2xl p-5 flex flex-col space-y-3 ">
      <div>
        <h1 className=" text-3xl text-center">{task.title}</h1>

        <span
          className="flex justify-end"
          onClick={() => {
            deleteTasks(task._id);
          }}>
          <span className="transform duration-200 scale-125 hover:scale-150">
            <FiDelete />
          </span>
        </span>
      </div>
      <div>
        <p className=" text-xl p-3 rounded-2xl text-center h-28 bg-gray-600">
          {task.content}
        </p>
      </div>
      <div className="flex justify-between">
        <div className=" text-xl ml-2">{task.status}</div>
        <div className="flex space-x-2">
          <span
            onClick={clickHandler}
            className="transform duration-200 hover:scale-125 mt-3">
            <LuClipboardCheck />
          </span>
          <div
            className={` shadow-xl transform duration-200 hover:scale-125  mt-3  rounded-full w-3 h-3 ${
              task.status == "completed" ? "bg-green-500" : "bg-red-500"
            }`}></div>
        </div>
      </div>
    </div>
  );
};

export default Taasks;
