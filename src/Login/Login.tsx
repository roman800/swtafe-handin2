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
import HomePage from "../homepage/homepage";
import useLocalStorage from "../hooks/localstorage";
import authenticationService from "../services/authentication-service";

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [jwt, setJWT] = useLocalStorage("jwt", undefined);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username && password) {
      // Fetch token
      const { user, token } = await authenticationService.login({
        email: username,
        password: password,
      });
      console.log(user)
      setJWT(token);
    }
  };

  const logInForm = (
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
  console.log(jwt);
  return jwt !== undefined   ? <HomePage></HomePage> : logInForm;
}
