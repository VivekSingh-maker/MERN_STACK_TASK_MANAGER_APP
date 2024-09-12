import axios from "axios";

export const callRegisterUserApi = async (formData) => {
  const response = await axios.post(
    "https://owner-avatar-mern-stack-task-manager-app.onrender.com/api/user/register",
    formData,
    { withCredentials: true }
  );

  return response?.data;
};

export const callLoginUserApi = async (formData) => {
  const response = await axios.post(
    "https://owner-avatar-mern-stack-task-manager-app.onrender.com/api/user/login",
    formData,
    { withCredentials: true }
  );

  return response?.data;
};

export const callUserAuthApi = async () => {
  const response = await axios.post(
    "https://owner-avatar-mern-stack-task-manager-app.onrender.com/api/user/auth",
    {},
    { withCredentials: true }
  );

  console.log(response, "response");

  return response?.data;
};

export const callLogoutApi = async (req, res) => {
  const response = await axios.post(
    "https://owner-avatar-mern-stack-task-manager-app.onrender.com/api/user/logout",
    {},
    { withCredentials: true }
  );

  return response?.data;
};

export const addNewTaskApi = async (formData) => {
  const response = await axios.post(
    "https://owner-avatar-mern-stack-task-manager-app.onrender.com/api/task/add-new-task",
    formData
  );

  return response?.data;
};

export const getAllTasksApi = async (getCurrentUserId) => {
  const response = await axios.get(
    `https://owner-avatar-mern-stack-task-manager-app.onrender.com/api/task/get-all-tasks-by-userid/${getCurrentUserId}`
  );

  return response?.data;
};

export const updateTaskApi = async (formData) => {
  const response = await axios.put(
    `https://owner-avatar-mern-stack-task-manager-app.onrender.com/api/task/update-task`,
    formData
  );

  return response?.data;
};

export const deleteTaskApi = async (getCurrentTaskId) => {
  const response = await axios.delete(
    `https://owner-avatar-mern-stack-task-manager-app.onrender.com/api/task/delete-task/${getCurrentTaskId}`
  );

  return response?.data;
};
