import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/UserSlice";

const store = configureStore({
  reducer: {
    users: userSlice,
  },
});
console.log(userSlice.actions);
export default store;
