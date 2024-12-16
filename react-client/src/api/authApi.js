import axiosInstance from "./axiosInstance";

export const login = async (credentials) => {
  return axiosInstance.post("/auth/login", credentials);
};
