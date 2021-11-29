import { Container, Stack, Typography, Table, TableRow, TableCell } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Exercise } from '../api/api';
import { AppState } from '../state/store';
import { getProgram } from '../state/workout-program/workout-program-slice';

export default function ProgramDetails() {
	const { id } = useParams();

	const programState = useSelector((state: AppState) => state.programReducer);
	const dispatch = useDispatch();

	useEffect(() => {
		if (id) dispatch(getProgram(Number(id)));
	}, [dispatch, id]);

	const loading = <div>Am loading</div>;

	function exerciseDisplay(exercise: Exercise): JSX.Element {
		return (
			<TableRow key={exercise.exerciseId}>
				<TableCell>{exercise.name}</TableCell>
				<TableCell>{exercise.description}</TableCell>
				<TableCell>{exercise.sets}</TableCell>
				<TableCell>{exercise.repetitions || exercise.time}</TableCell>
			</TableRow>
		);
	}

	return (
		<div>
			{programState.loading ? (
				loading
			) : (
				<Container sx={{ border: '1px solid pink', borderRadius: '5px', padding: '20px' }}>
					<Stack direction="column" spacing={2}>
						<Stack direction="row">
							<Typography textAlign="left" marginRight={6} width={100}>
								Name:
							</Typography>
							<Typography textAlign="left">{programState.program?.name}</Typography>
						</Stack>
						<Stack direction="row">
							<Typography textAlign="left" marginRight={6} minWidth={100} width={100}>
								Description:
							</Typography>
							<Typography textAlign="left">{programState.program?.description}</Typography>
						</Stack>
						<Stack direction="row">
							<Typography textAlign="left" marginRight={6} width={100}>
								Id:
							</Typography>
							<Typography>{programState.program?.workoutProgramId}</Typography>
						</Stack>
						<Typography>Exercises: </Typography>
						<Table>
							<TableRow>
								<TableCell>Exercise</TableCell>
								<TableCell>Description</TableCell>
								<TableCell>Sets</TableCell>
								<TableCell>Reps/time</TableCell>
							</TableRow>
							{programState.program?.exercises?.map((exercise) => exerciseDisplay(exercise))}
						</Table>
					</Stack>
				</Container>
			)}
		</div>
	);
}
