import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login } from "../api/authApi";
import axios from "axios";

const initialState = {
  user: null,
  token: null,
  isLoading: false,
  error: null,
};

export const loginThunk = createAsyncThunk(
  "auth/login",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await login({ username, password });

      if (!response.status === 200) {
        throw new Error("Failed to login");
      }

      const { user, token } = response.data;
      return { user, token };
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);

export const authorization = createAsyncThunk(
  "auth/authorization",
  async (_, { rejectWithValue }) => {
    const token = localStorage.getItem("authToken");
    if (!token) return null;

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/auth/validate`,
        { token }
      );

      if (!response.status === 200) {
        throw new Error("Invalid token");
      }

      const { user } = response.data;
      return { user, token };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("authToken");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;

        localStorage.setItem("authToken", action.payload.token);
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Failed to login";
      })
      .addCase(authorization.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(authorization.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload?.user || null;
        state.token = action.payload?.token || null;
        state.error = null;
      })
      .addCase(authorization.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.token = null;
        state.error = action.payload || "Authorization failed";
      });
  },
});

export const { logout } = authReducer.actions;
export default authReducer.reducer;
