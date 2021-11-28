import { Stack } from "@mui/material";
import { Link, Routes, Route } from "react-router-dom";
import CreateTrainer from "../manager/pages/createTrainer";
import NavBar from "../shared/navbar";
import Clients from "./pages/clients";

export interface NavBarRoute {
  label: string;
  route: string;
}

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
    <div>
      <NavBar routes={trainerRoutes} />
      <Routes>
        <Route path="/" element={<Clients></Clients>}></Route>
        <Route path="/client" element={<CreateTrainer></CreateTrainer>}></Route>
        <Route path="/program" element={<div>Hello program</div>}></Route>
      </Routes>
    </div>
  );
}
