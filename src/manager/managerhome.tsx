
import CreateUser from "./pages/createTrainer";
import { Routes, Route } from "react-router-dom";
import NavBar from "../shared/navbar";
import { NavBarRoute } from "../shared/navRouter";
import PersonalTrainers from "./pages/personal-trainers";
export default function ManagerHome() {
  const trainerRoutes: NavBarRoute[] = [
    {
      label: "List",
      route: "/",
    },
    {
      label: "Create Trainer",
      route: "/create",
    },
  ];

  return (
    <div>
      <NavBar routes={trainerRoutes} />
      <Routes>
        <Route path="/" element={<PersonalTrainers></PersonalTrainers>}></Route>
        <Route path="/create" element={<CreateUser></CreateUser>}></Route>

      </Routes>
    </div>
  );
}
