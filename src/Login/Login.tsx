import { TextField, Container } from '@mui/material'
import React from 'react'

export default function Login() {
    return (
        <Container maxWidth="lg">

            <TextField
                required
                id="outlined-required"
                label="Required"
                defaultValue="Hello World"
            />
        </Container>
    )
}
