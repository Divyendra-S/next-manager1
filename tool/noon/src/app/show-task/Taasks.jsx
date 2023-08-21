"use client";

const Taasks = ({ task, key }) => {
  return (
    <div className=" bg-neutral-950 w-[400px] md:w-[600px]">
      <div>
        <h1>Title:{task.title}</h1>
      </div>
      <div>
        <p>{task.content}</p>
      </div>
      <div>{task.status}</div>
    </div>
  );
};

export default Taasks;
