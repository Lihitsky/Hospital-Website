import axiosInstance from "./axiosInstance";

export const create = async (data) => {
  return axiosInstance.post("/news/", data);
};
