import { Axios } from "../helper/httpHelper";

export async function addTask(taskData) {
  const result = await Axios.post("/api/task", taskData).then(
    (response) => response.data
  );
  console.log(taskData);
  return result;
}

export async function deleteTask(taskId) {
  const result = await Axios.delete(`/api/task/${taskId}`).then(
    (response) => response.data
  );
  return result;
}

export async function showTask(userId) {
  const result = await Axios.get(`/api/user/${userId}/task`).then(
    (response) => response.data
  );
  return result;
}

export async function updateTask(taskId, taskData) {
  const result = await Axios.put(`/api/task/${taskId}`, taskData).then(
    (response) => response.data
  );
  return result;
}
