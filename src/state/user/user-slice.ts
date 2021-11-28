import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../../api/api";
import { apiClient } from "../api-clients";

interface UserState {
  clients: User[];
  trainers: User[];
}

const initialState: UserState = {
  clients: [],
  trainers: [],
};

const getClients = createAsyncThunk("clients/get", async () => {
  return await apiClient.clients();
});

const getUsers = createAsyncThunk("users/get", async () => {
  return await apiClient.usersAll();
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getClients.fulfilled, (state, action) => {
      state.clients = action.payload;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.trainers = action.payload.filter(
        (user) => user.accountType === "PersonalTrainer"
      );
    });
  },
});

// export const {  } = userSlice.actions
export default userSlice.reducer;
