import { get as getNews } from "../api/newsApi";
import { create as createNews } from "../api/newsApi";
import { deleteById as deleteNews } from "../api/newsApi";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  news: [],
  isLoading: false,
  error: null,
};

export const fetchNewsThunk = createAsyncThunk("news/fetchNews", async () => {
  const response = await getNews();
  return response.data;
});

export const createNewsThunk = createAsyncThunk("news/create", async (data) => {
  const response = await createNews(data);
  return response.data;
});

export const deleteNewsThunk = createAsyncThunk("news/delete", async (id) => {
  const response = await deleteNews(id);
  return response.data;
});

const commonSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // GET
      .addCase(fetchNewsThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchNewsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.news = action.payload;
      })
      .addCase(fetchNewsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      // CREATE
      .addCase(createNewsThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createNewsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.news.push(action.payload);
      })
      .addCase(createNewsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      // DELETE
      .addCase(deleteNewsThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteNewsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.news = state.news.filter(
          (news) => news.id !== +action.payload.id
        );
      })
      .addCase(deleteNewsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default commonSlice.reducer;
