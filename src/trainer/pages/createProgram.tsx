import { Button, FormControl, Container, FormGroup, FormHelperText, FormLabel, Input, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { IWorkoutProgram, WorkoutProgram } from '../../api/api'
import { useSelector, useDispatch } from "react-redux";
import { AppState } from '../../state/store';
import { getClients } from '../../state/user/user-slice';
import { useAuth } from '../../auth/authProvider';
import { apiClient } from '../../state/api-clients';

export default function CreateProgram() {
    const [createTraining, setCreateTraining] = useState<IWorkoutProgram>({ clientId: 0, exercises: [] })
    const clients = useSelector((state: AppState) => state.userReducer.clients)
    const dispatch = useDispatch();
    const context = useAuth();

    useEffect(() => {
        dispatch(getClients())
    }, [dispatch])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (createTraining && context?.user) {
            try {
                await apiClient.workoutProgramsPOST(createTraining as WorkoutProgram)
            } catch (error) {
                console.log(error);
            }
        }
        (e.target as HTMLFormElement).reset()
        setCreateTraining({ exercises: [], description: "", name: "" })

    };

    return (
        <Container maxWidth="sm">
            <Stack onSubmit={handleSubmit} component="form" direction="column" height="1" alignItems="center" justifyContent="space-around"  >
                <FormControl component="form" sx={{ width: "fit-content" }}>
                    <FormLabel component="legend">Title</FormLabel>
                    <FormGroup>
                        <Input type="text"
                            value={createTraining.name}
                            defaultValue=""
                            onChange={(value) => { setCreateTraining({ ...createTraining, name: value.target.value }) }}
                        ></Input>
                    </FormGroup>
                    <FormHelperText></FormHelperText>
                </FormControl>
                <FormControl component="form">
                    <FormLabel component="legend">Beskrivelse</FormLabel>
                    <FormGroup>
                        <TextField
                            id="outlined-multiline-static"
                            label="Beskrivelse"
                            value={createTraining.description}
                            multiline
                            rows={4}
                            defaultValue=""
                            onChange={(value) => { setCreateTraining({ ...createTraining, description: value.target.value }) }}

                        />
                    </FormGroup>
                    <FormHelperText></FormHelperText>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }}>

                    <InputLabel id="select-client">Klient</InputLabel>
                    <Select
                        labelId="select-client"
                        id="demo-simple-select"
                        value={Number(createTraining.clientId)}
                        label="Klient"
                        onChange={(value) => setCreateTraining({ ...createTraining, clientId: Number(value.target.value) })}
                    >

                        {clients.map(value => < MenuItem key={value.userId} value={value.userId} > {value.firstName} {value.lastName}</ MenuItem >)}
                    </Select>
                </FormControl>
                <Button variant="contained" type="submit">
                    Create workout
                </Button>
            </Stack>
        </Container>
    )
}


