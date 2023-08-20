import { Axios } from "../helper/httpHelper";

export async function signUp(userData) {
  const result = await Axios.post("/api/user", userData).then(
    (response) => response.data
  );
  return result;
}

export async function login(loginData) {
  const result = await Axios.post("/api/login", loginData).then(
    (response) => response.data
  );
  return result;
}

export async function logout() {
  const result = await Axios.post("/api/logout").then(
    (response) => response.data
  );
  return result;
}

export async function connect() {
  const result = await Axios.get("/api/connect").then(
    (response) => response.data
  );
  return result;
}
