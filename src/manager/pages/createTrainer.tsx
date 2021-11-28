import {
  Container,
  Stack,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
} from "@mui/material";
import { useState } from "react";

import { IUser, User } from "../../api/api";
import { useAuth } from "../../auth/authProvider";
import { apiClient } from "../../state/api-clients";

export default function CreateTrainer() {
  const [form, setForm] = useState<IUser | undefined>(undefined);
  const userContext = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let userType =
      userContext?.user?.accountType === "Manager"
        ? "PersonalTrainer"
        : "Client";
    setForm((old) => {
      return { ...old, accountType: userType };
    });

    try {
      let response = await apiClient.usersPOST(form as User);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Stack component="form" onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Firstname:</FormLabel>
          <Input
            type="text"
            value={form?.firstName}
            onChange={(value) =>
              setForm({ ...form, firstName: value.target.value })
            }
          ></Input>
          <FormHelperText></FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>Lastname</FormLabel>
          <Input
            type="Lastname"
            value={form?.lastName}
            onChange={(value) =>
              setForm({ ...form, lastName: value.target.value })
            }
          ></Input>
          <FormHelperText></FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            type="Email"
            value={form?.email}
            onChange={(value) =>
              setForm({ ...form, email: value.target.value })
            }
          ></Input>
          <FormHelperText></FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            type="Password"
            value={form?.password}
            onChange={(value) =>
              setForm({ ...form, password: value.target.value })
            }
          ></Input>
          <FormHelperText></FormHelperText>
        </FormControl>
        <Button variant="contained" type="submit">
          Create
        </Button>
      </Stack>
    </Container>
  );
}
