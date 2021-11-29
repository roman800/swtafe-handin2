import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { User } from "../../api/api";
import { AppState } from "../../state/store";
import { getClients } from "../../state/user/user-slice";
import { Card, CardContent, Container, Stack, Typography } from "@mui/material";
export default function Clients() {
  const clients = useSelector((state: AppState) => state.userReducer.clients);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClients());
  }, [dispatch]);

  return (
    <Container maxWidth="sm">
      <div>Clients:</div>
      <Stack spacing={2} alignItems="center">
        {clients.map((client) => {
          return userCard(client);
        })}
      </Stack>
    </Container>
  );
}

function userCard(trainer: User): JSX.Element {
  return (
    <Card sx={{ maxWidth: 200 }} variant="outlined" key={trainer.email}>
      <CardContent>
        <Typography variant="body1">
          {trainer.firstName} {trainer.lastName}
        </Typography>
        <Typography variant="body2">email: {trainer.email}</Typography>
      </CardContent>
    </Card>
  );
}
