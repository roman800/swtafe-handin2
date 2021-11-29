import { Container, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
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

	return (
		<div>
			{programState.loading ? (
				loading
			) : (
				<Stack direction="column">
					<Stack direction="row" spacing={6}>
						<Typography>Program name: </Typography>
						<Typography>{programState.program?.name}</Typography>
					</Stack>
					<Typography>Exercises: </Typography>
					<Container></Container>
				</Stack>
			)}
		</div>
	);
}
