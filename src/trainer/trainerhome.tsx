import { Routes, Route } from "react-router-dom";
import { createProgram } from "typescript";
import CreateTrainer from "../manager/pages/createTrainer";
import NavBar from "../shared/navbar";
import { NavBarRoute } from "../shared/navRouter";
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
  ];

  return (
    <div style={{height:"100vh"}}>
      <NavBar routes={trainerRoutes} />
      <Routes>
        <Route path="/" element={<Clients></Clients>}></Route>
        <Route path="/client" element={<CreateTrainer></CreateTrainer>}></Route>
        <Route path="/program" element={<CreateProgram></CreateProgram>}></Route>
      </Routes>
    </div>
  );
}
