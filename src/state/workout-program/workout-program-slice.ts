import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { WorkoutProgram } from '../../api/api';
import { apiClient } from '../api-clients';

interface WorkoutProgramState {
	programs: WorkoutProgram[];
}

const initialState: WorkoutProgramState = {
	programs: [],
};

export const getPrograms = createAsyncThunk('programs/get', async (userId: number) => {
	return await apiClient.workoutProgramsAll();
});

const programSlice = createSlice({
	name: 'program',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getPrograms.fulfilled, (state, action) => {
			const userId = action.meta.arg;
			state.programs = action.payload.filter(
				(program) => program.clientId == userId || program.personalTrainerId === userId
			);
		});
	},
});

export default programSlice.reducer;
