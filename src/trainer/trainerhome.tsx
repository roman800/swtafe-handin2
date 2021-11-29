import { Routes, Route } from "react-router-dom";
import CreateUser from "../manager/pages/createTrainer";
import NavBar from "../shared/navbar";
import { NavBarRoute } from "../shared/navRouter";
import ProgramDetails from "../workout-programs/program-details";
import WorkoutProgramList from "../workout-programs/program-list";
import Clients from "./pages/clients";
import CreateProgram from "./pages/createProgram";



export default function TrainerHome() {
  const trainerRoutes: NavBarRoute[] = [
    {
      label: "List",
      route: "/",
    },
    {
      label: "Create Client",
      route: "/client",
    },
    {
      label: "Create program",
      route: "/program",
    },
    {
      label: "My programs",
      route: "/my-programs",
    },
  ];

  return (
    <div style={{ height: "100vh" }}>
      <NavBar routes={trainerRoutes} />
      <Routes>
        <Route path="/" element={<Clients></Clients>}></Route>
        <Route path="/client" element={<CreateUser></CreateUser>}></Route>
        <Route path="/program" element={<CreateProgram></CreateProgram>}></Route>
        <Route path="/my-programs" element={<WorkoutProgramList></WorkoutProgramList>}></Route>
        <Route path="/my-programs/:id" element={<ProgramDetails></ProgramDetails>}></Route>
      </Routes>
    </div>
  );
}
