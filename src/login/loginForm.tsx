import {
  Container,
  Stack,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { useAuth } from "../auth/authProvider";

export default function LoginForm() {
  const context = useAuth();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username && password) {
      context?.login(username, password);
    }
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
