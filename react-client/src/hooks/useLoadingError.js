import { useSelector } from "react-redux";

export const useLoadingError = (...keys) => {
  const state = useSelector((state) => state);
  const isLoading = keys.some((key) => state[key]?.isLoading);
  const error = keys.map((key) => state[key]?.error).find((e) => e);

  return { isLoading, error };
};
