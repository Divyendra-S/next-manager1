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
    state: "none",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addTask(task);
      setTask({
        title: "",
        content: "",
        state: "none",
      });
      toast.success("Task Added Successfully");
    } catch (error) {
      console.log(error);
      toast.error("Failed to add task");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Task Title</label>
          <input
            type="text"
            placeholder="Title"
            name="title"
            id="title"
            value={task.title}
            onChange={(e) => setTask({ ...task, title: e.target.value })}
          />
        </div>
        <div>
          <label>Task Content</label>
          <textarea
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
            name="state"
            id="state"
            value={task.state}
            onChange={(e) => setTask({ ...task, state: e.target.value })}>
            <option value="none" disabled>
              ----Select status----
            </option>
            <option value="pending">pending</option>
            <option value="completed">completed</option>
          </select>
        </div>
        <div>
          <button type="submit">Add Task</button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
