"use client";
import { useState } from "react";
import { toast } from "react-toastify";
import { addTask } from "@/services/taskservice";
import UserContext from "@/context/userContext";
import { useContext } from "react";

const AddTask = () => {
  const { user } = useContext(UserContext);

  const [Task, setTask] = useState({
    title: "",
    content: "",
    status: "none",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addTask(Task);
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
    <div className="h-scree bg-slate-900 min-h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="p-8 w-full max-w-md bg-slate-800 rounded-lg space-y-6 shadow-md">
        <div>
          <label className="block text-gray-300 font-medium">Task Title</label>
          <input
            type="text"
            placeholder="Title"
            name="title"
            id="title"
            value={Task.title}
            onChange={(e) => setTask({ ...Task, title: e.target.value })}
            className="mt-1 p-2 w-full focus:outline-none  rounded bg-gray-700 text-gray-300"
          />
        </div>
        <div>
          <label className="block text-gray-300 font-medium">
            Task Content
          </label>
          <textarea
            rows={5}
            placeholder="Content"
            name="content"
            id="content"
            value={Task.content}
            onChange={(e) => setTask({ ...Task, content: e.target.value })}
            className="mt-1 p-2 w-full focus:outline-none  bg-gray-700 text-gray-300"
          />
        </div>
        <div>
          <label className="block text-gray-300 font-medium">Status</label>
          <select
            name="status"
            id="status"
            value={Task.status}
            onChange={(e) => setTask({ ...Task, status: e.target.value })}
            className="mt-1 p-2 w-full bg-gray-700 text-gray-300 focus:outline-none">
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
            className="w-full p-2 bg-blue-600 text-gray-200 rounded hover:bg-blue-700">
            Add Task
          </button>
        </div>
      </form>
    </div>
    // <div>
    //   <form onSubmit={handleSubmit}>
    //     <div>
    //       <label>Task Title</label>
    //       <input
    //         type="text"
    //         placeholder="Title"
    //         name="title"
    //         id="title"
    //         value={Task.title}
    //         onChange={(e) => setTask({ ...Task, title: e.target.value })}
    //       />
    //     </div>
    //     <div>
    //       <label>Task Content</label>
    //       <textarea
    //         rows={5}
    //         placeholder="Content"
    //         name="content"
    //         id="content"
    //         value={Task.content}
    //         onChange={(e) => setTask({ ...Task, content: e.target.value })}
    //       />
    //     </div>
    //     <div>
    //       <label>status</label>
    //       <select
    //         name="status"
    //         id="status"
    //         value={Task.status}
    //         onChange={(e) => setTask({ ...Task, status: e.target.value })}>
    //         <option value="none" disabled>
    //           ----Select status----
    //         </option>
    //         <option value="pending">pending</option>
    //         <option value="completed">completed</option>
    //       </select>
    //     </div>
    //     <div>
    //       <button type="submit">Add Task</button>
    //     </div>
    //   </form>
    // </div>
  );
};

export default AddTask;
// import { useState } from "react";
// import { toast } from "react-toastify";
// import { addTask } from "@/services/taskservice";
// import UserContext from "@/context/userContext";
// import { useContext } from "react";

// const AddTask = () => {
//   const { user } = useContext(UserContext);

//   const [Task, setTask] = useState({
//     title: "",
//     content: "",
//     status: "none",
//   });
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await addTask(Task);
//       setTask({
//         title: "",
//         content: "",
//         status: "none",
//       });
//       toast.success("Task Added Successfully");
//     } catch (error) {
//       console.log(error.message);
//       toast.error("Failed to add task");
//     }
//   };
//   return (
//     <div className="p-8  bg-gray-100 rounded-md shadow-md">
//       <form className="space-y-4 " onSubmit={handleSubmit}>
//         <div className="flex flex-col">
//           <label className="mb-2 text-sm font-medium text-gray-600">
//             Task Title
//           </label>
//           <input
//             className="p-2 border rounded-md focus:outline-none focus:border-blue-500"
//             type="text"
//             placeholder="Title"
//             name="title"
//             id="title"
//             value={Task.title}
//             onChange={(e) => setTask({ ...Task, title: e.target.value })}
//           />
//         </div>
//         <div className="flex flex-col">
//           <label className="mb-2 text-sm font-medium text-gray-600">
//             Task Content
//           </label>
//           <textarea
//             className="p-2 border rounded-md focus:outline-none focus:border-blue-500"
//             rows={5}
//             placeholder="Content"
//             name="content"
//             id="content"
//             value={task.content}
//             onChange={(e) => setTask({ ...task, content: e.target.value })}
//           />
//         </div>
//         <div>
//           <label>status</label>
//           <select
//             className="p-2 border rounded-md focus:outline-none focus:border-blue-500"
//             name="status"
//             id="status"
//             value={task.state}
//             onChange={(e) => setTask({ ...task, status: e.target.value })}>
//             <option value="none" disabled>
//               ----Select status----
//             </option>
//             <option value="pending">pending</option>
//             <option value="completed">completed</option>
//           </select>
//         </div>
//         <div>
//           <button
//             type="submit"
//             className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
//             Add Task
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddTask;
