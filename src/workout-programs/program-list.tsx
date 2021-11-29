import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from '../auth/authProvider';
import { AppState } from '../state/store';
import { getPrograms } from '../state/workout-program/workout-program-slice';
import { Card, CardContent, Container, Stack, Typography } from '@mui/material';
import { WorkoutProgram } from '../api/api';

export default function WorkoutProgramList() {
	const auth = useAuth();

	const programs = useSelector((state: AppState) => state.programReducer.programs);
	const dispatch = useDispatch();

	useEffect(() => {
		if (auth?.user?.userId) dispatch(getPrograms(auth.user.userId));
	}, [dispatch, auth]);

	return (
		<Container maxWidth="sm">
			<div>Programs:</div>
			<Stack spacing={2} alignItems="center">
				{programs.map((program) => {
					return programCard(program);
				})}
			</Stack>
		</Container>
	);

	function programCard(program: WorkoutProgram): JSX.Element {
		return (
			<Card sx={{ maxWidth: 200 }} variant="outlined" key={program.workoutProgramId}>
				<CardContent>
					<Typography variant="body1">{program.name}</Typography>
				</CardContent>
			</Card>
		);
	}
}
