"use client";
import { useState } from "react";
import { toast } from "react-toastify";
import { addTask } from "@/services/taskservice";
import UserContext from "@/context/userContext";
import { useContext } from "react";

const AddTask = () => {
  const { user } = useContext(UserContext);

  const [task, setTask] = useState({
    title: "",
    content: "",
    status: "none",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addTask(task);
      setTask({
        title: "",
        content: "",
        status: "none",
      });
      toast.success("Task Added Successfully");
    } catch (error) {
      console.log(error);
      toast.error("Failed to add task");
    }
  };
  return (
    <div className="p-8 bg-gray-900 flex flex-col justify-center items-center h-screen">
      <div className="p-8 bg-gray-800 rounded-md shadow-md text-gray-200 w-[450px] md:w-[600px] md:max-w-2xl">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="title" className="mb-2 text-sm font-medium">
              Task Title
            </label>
            <input
              type="text"
              placeholder="Title"
              name="title"
              id="title"
              value={task.title}
              onChange={(e) => setTask({ ...task, title: e.target.value })}
              className="p-2 bg-gray-700  rounded-md focus:outline-none focus:border-blue-500 text-gray-200"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="content" className="mb-2 text-sm font-medium">
              Task Content
            </label>
            <textarea
              rows={5}
              placeholder="Content"
              name="content"
              id="content"
              value={task.content}
              onChange={(e) => setTask({ ...task, content: e.target.value })}
              className="p-2 bg-gray-700  rounded-md focus:outline-none focus:border-blue-500 text-gray-200"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="status" className="mb-2 text-sm font-medium">
              Status
            </label>
            <select
              name="status"
              id="status"
              value={task.state}
              onChange={(e) => setTask({ ...task, status: e.target.value })}
              className="p-2 bg-gray-700  rounded-md focus:outline-none focus:border-blue-500 text-gray-200">
              <option value="none" disabled>
                ----Select status----
              </option>
              <option value="pending">pending</option>
              <option value="completed">completed</option>
            </select>
          </div>
          <div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
              Add Task
            </button>
          </div>
        </form>
      </div>
      {/* <div className="p-8  bg-gray-100 rounded-md shadow-md">
        <form className="space-y-4 " onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-600">
              Task Title
            </label>
            <input
              className="p-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              placeholder="Title"
              name="title"
              id="title"
              value={task.title}
              onChange={(e) => setTask({ ...task, title: e.target.value })}
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-600">
              Task Content
            </label>
            <textarea
              className="p-2 border rounded-md focus:outline-none focus:border-blue-500"
              rows={5}
              placeholder="Content"
              name="content"
              id="content"
              value={task.content}
              onChange={(e) => setTask({ ...task, content: e.target.value })}
            />
          </div>
          <div>
            <label>status</label>
            <select
              className="p-2 border rounded-md focus:outline-none focus:border-blue-500"
              name="status"
              id="status"
              value={task.state}
              onChange={(e) => setTask({ ...task, status: e.target.value })}>
              <option value="none" disabled>
                ----Select status----
              </option>
              <option value="pending">pending</option>
              <option value="completed">completed</option>
            </select>
          </div>
          <div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
              Add Task
            </button>
          </div>
        </form>
      </div> */}
    </div>
  );
};

export default AddTask;
