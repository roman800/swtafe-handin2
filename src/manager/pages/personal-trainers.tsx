import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { User } from "../../api/api";
import { AppState } from "../../state/store";
import { getUsers } from "../../state/user/user-slice";
import { Card, CardContent, Container, Stack, Typography } from "@mui/material";
export default function PersonalTrainers() {
  const trainers = useSelector((state: AppState) => state.userReducer.trainers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <Container maxWidth="sm">
      <div>Trainers:</div>
      <Stack spacing={2} alignItems="center">
        {trainers.map((trainer) => {
          return userCard(trainer);
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
