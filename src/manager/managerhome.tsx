import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import PersonalTrainers from "./pages/personal-trainers";
import CreateTrainer from "./pages/createTrainer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
export default function ManagerHome() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PersonalTrainers></PersonalTrainers>}></Route>
        <Route path="/create" element={<CreateTrainer></CreateTrainer>}></Route>
      </Routes>
      <AppBar>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <Link to="/create">Create new Trainer</Link>
            </Typography>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <Link to="/">List</Link>
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
