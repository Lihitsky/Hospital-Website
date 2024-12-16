import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  news: [],
  isLoading: false,
  error: null,
};

export const initial = createAsyncThunk("news/fetchNews", async () => {
  const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/news/`);
  return response.data;
});

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(initial.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(initial.fulfilled, (state, action) => {
        state.isLoading = false;
        state.news = action.payload;
      })
      .addCase(initial.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default commonSlice.reducer;
