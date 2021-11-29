import {
  Container,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@mui/material";
import { useState } from "react";

import { IUser, User } from "../../api/api";
import { useAuth } from "../../auth/authProvider";
import { UserAccountType } from "../../models/user";
import { apiClient } from "../../state/api-clients";

export default function CreateUser() {
  const userContext = useAuth();


  const [form, setForm] = useState<IUser | undefined>({
    accountType: getAccountType(),
    personalTrainerId: getAccountType() === 'Client' ? userContext?.user?.userId : undefined
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await apiClient.usersPOST(form as User);
    } catch (error) {
      console.log(error);
    }
  };

  function getAccountType(): UserAccountType {
    return userContext?.user?.accountType === "Manager"
      ? "PersonalTrainer"
      : "Client";
  }

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
          <></>
        </FormControl>
        <Button variant="contained" type="submit">
          Create
        </Button>
      </Stack>
    </Container>
  );
}
