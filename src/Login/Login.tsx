import {
  TextField,
  Container,
  Stack,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
} from "@mui/material";
import React, { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("username:" + username);
    console.log("password" + password);
  };
  return (
    <Container maxWidth="sm">
      <Stack component="form" onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Username:</FormLabel>
          <Input
            type="text"
            value={username}
            onChange={(value) => setUsername(value.target.value)}
          ></Input>
          <FormHelperText></FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(value) => setPassword(value.target.value)}
          ></Input>
          <FormHelperText></FormHelperText>
        </FormControl>
        <Button variant="contained" type="submit">
          Login
        </Button>
      </Stack>
    </Container>
  );
}
