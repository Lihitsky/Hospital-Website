import axiosInstance from "./axiosInstance";

export const get = async () => {
  return axiosInstance.get("/news");
};

export const create = async (data) => {
  axiosInstance.defaults.headers.post["Content-Type"] = "multipart/form-data";
  return axiosInstance.post("/news", data);
};

export const deleteById = async (id) => {
  return axiosInstance.delete(`/news/${id}`);
};
