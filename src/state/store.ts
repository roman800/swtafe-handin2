import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/user-slice';
import programReducer from './workout-program/workout-program-slice';
export const store = configureStore({
	reducer: {
		userReducer,
		programReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			// Needed as Date object is considered un-serializable by redux
			serializableCheck: false,
		}),
});

export type AppState = ReturnType<typeof store.getState>;
