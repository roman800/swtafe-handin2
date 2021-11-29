import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { WorkoutProgram } from '../../api/api';
import { apiClient } from '../api-clients';

interface WorkoutProgramState {
	programs: WorkoutProgram[];
	program: WorkoutProgram | undefined;
	loading: boolean;
}

const initialState: WorkoutProgramState = {
	programs: [],
	program: undefined,
	loading: true,
};

export const getPrograms = createAsyncThunk('programs/get', async (userId: number) => {
	return await apiClient.workoutProgramsAll();
});

export const getProgram = createAsyncThunk('program/get', async (programId: number) => {
	return await apiClient.workoutProgramsGET(programId);
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
		builder.addCase(getProgram.fulfilled, (state, action) => {
			state.program = action.payload;
			state.loading = false;
		});
		builder.addCase(getProgram.pending, (state, action) => {
			state.loading = true;
		});
	},
});

export default programSlice.reducer;
