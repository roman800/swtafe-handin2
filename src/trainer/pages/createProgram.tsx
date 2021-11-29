import { Button, FormControl, FormGroup, FormHelperText, FormLabel, Input, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import { IUser, IWorkoutProgram } from '../../api/api'


export default function CreateProgram() {
    const [createTraining, setCreateTraining] = useState<IWorkoutProgram | undefined>(undefined)
    const [client, setClient] = useState<IUser | undefined>(undefined)

    return (
        <Stack direction="column" height="1" alignItems="center" justifyContent="space-around" >

            <FormControl component="form" sx={{ width: "fit-content" }}>
                <FormLabel component="legend">Title</FormLabel>
                <FormGroup>
                    <Input type="text"
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
                        multiline
                        rows={4}
                        defaultValue=""
                    />
                </FormGroup>
                <FormHelperText></FormHelperText>
            </FormControl>
            <FormControl>

                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={client?.firstName + " " + client?.lastName}
                    label="Klient"
                    onChange={(value) => setCreateTraining({ ...createTraining, clientId: parseInt(value.target.value) })}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <Button variant="contained" type="submit">
                    Login
                </Button>
            </FormControl>
        </Stack>
    )
}
