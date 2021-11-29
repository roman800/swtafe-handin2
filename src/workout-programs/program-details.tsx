import { Container, Stack, Typography, Table, TableRow, TableCell, FormControl, FormLabel, Input, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Exercise, ExerciseDto, IExercise } from '../api/api';
import { useAuth } from '../auth/authProvider';
import { UserAccountType } from '../models/user';
import { apiClient } from '../state/api-clients';
import { AppState } from '../state/store';
import { getProgram } from '../state/workout-program/workout-program-slice';

export default function ProgramDetails() {
	const { id } = useParams();
	const programState = useSelector((state: AppState) => state.programReducer);
	const dispatch = useDispatch();
	const context = useAuth();

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
						{context?.user?.accountType as UserAccountType === "PersonalTrainer" ?
							<CreateExercise userId={context?.user?.userId} workoutId={programState.program?.workoutProgramId} /> : <></>}
					</Stack>
				</Container>
			)}
		</div>
	);
}

function CreateExercise(props: { userId?: number, workoutId?: number }) {
	const [exercise, setExercise] = useState<IExercise>({ name: "" })
	const dispatch = useDispatch();
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

		e.preventDefault();
		const result = await apiClient.exercisesPOST({ ...exercise, personalTrainerId: props.userId, workoutProgramId: props.workoutId } as Exercise)
		if (result.workoutProgramId) {
			dispatch(getProgram(result.workoutProgramId))
		}
	}
	return (
		<Stack component="form" onSubmit={handleSubmit} direction="row" spacing="20">
			<FormControl>
				<FormLabel>Name:</FormLabel>
				<Input
					type="text"
					value={exercise?.name}
					onChange={(value) =>
						setExercise({ ...exercise, name: value.target.value })
					}
				></Input>

			</FormControl>
			<FormControl>
				<FormLabel>Description:</FormLabel>
				<Input
					type="text"
					value={exercise?.description}
					onChange={(value) =>
						setExercise({ ...exercise, description: value.target.value })
					}
				></Input>
			</FormControl>
			<FormControl>
				<FormLabel>Sets:</FormLabel>
				<Input
					type="number"
					value={exercise?.sets}
					onChange={(value) =>
						setExercise({ ...exercise, sets: Number(value.target.value) })
					}
				></Input>
			</FormControl>
			<FormControl>
				<FormLabel>Reps:</FormLabel>
				<Input
					type="number"
					value={exercise?.repetitions}
					onChange={(value) =>
						setExercise({ ...exercise, repetitions: Number(value.target.value) })
					}
				></Input>
			</FormControl>
			<FormControl>
				<FormLabel>Time:</FormLabel>
				<Input
					type="text"
					value={exercise?.time}
					onChange={(value) =>
						setExercise({ ...exercise, time: value.target.value })
					}
				></Input>
			</FormControl>
			<Button variant="contained" type="submit">Create Exercise</Button>

		</Stack>
	)

}