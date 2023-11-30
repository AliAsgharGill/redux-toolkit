import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      console.log(state, action);
    },
    removeUser(state, action) {
      console.log(state, action);
    },
    deleteUsers(state, action) {
      console.log(state, action);
    },
  },
});
export default userSlice.reducer;
export const { addUser, removeUser, deleteUsers } = userSlice.actions;
