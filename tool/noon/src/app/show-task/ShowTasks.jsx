"use client";
import UserContext from "@/context/userContext";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { showTask, deleteTask } from "@/services/taskservice";
import Taasks from "./Taasks";
import { toast } from "react-toastify";

const ShowTasks = () => {
  const { user } = useContext(UserContext);

  const [tasks, setTasks] = useState([]);
  const getTasks = async (userId) => {
    try {
      const res = await showTask(userId);

      setTasks([...res].reverse());
    } catch (error) {
      console.log(error);
    }
  };
  
    
      if (user) {
        getTasks(user._id);
      }
    
  

  const deleteHandler = async (taskId) => {
    try {
      await deleteTask(taskId);
      const newTask = tasks.filter((task) => task._id === taskId);
      setTasks([...newTask]);
      toast.success("Task deleted successfully");
    } catch (error) {
      toast.error("error in deleting task");
    }
  };

  return (
    <div className="  bg-gray-900 text-white flex flex-col space-y-7 p-14">
      <h1 className="text-center text-3xl">You have ({tasks.length}) tasks</h1>
      <div className=" flex min-h-screen flex-col space-y-7 justify-start p-7  items-center">
        {tasks.map((task) => (
          <Taasks task={task} key={task._id} deleteItem={deleteHandler} />
        ))}
      </div>
    </div>
  );
};

export default ShowTasks;
