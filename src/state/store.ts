import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/user-slice";

export const store = configureStore({
  reducer: {
    userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // Needed as Date object is considered un-serializable by redux
      serializableCheck: false,
    }),
});

export type AppState = ReturnType<typeof store.getState>;
