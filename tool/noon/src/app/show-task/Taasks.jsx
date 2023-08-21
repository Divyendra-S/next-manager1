"use client";

const Taasks = ({ task, key }) => {
  return (
    <div className="  bg-gray-800 w-[400px] md:w-[700px] rounded-2xl p-5 flex flex-col space-y-3 ">
      <div>
        <h1 className=" text-3xl">Title : {task.title}</h1>
      </div>
      <div>
        <p className=" text-xl">{task.content}</p>
      </div>
      <div className="flex justify-between">
        <div className=" text-xl">{task.status}</div>
        <div
          className={` shadow-lg mt-3  rounded-full w-3 h-3 ${
            task.status == "completed" ? "bg-green-800" : "bg-red-800"
          }`}></div>
      </div>
    </div>
  );
};

export default Taasks;
