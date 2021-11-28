import { Route, Routes } from "react-router-dom";
import CreateTrainer from "./pages/createTrainer";
import PersonalTrainers from "./pages/personal-trainers";

export default function ManagerHome() {
  return (
    <div>
      <div>Navbar</div>
      <Routes>
        <Route
          path="//*"
          element={<PersonalTrainers></PersonalTrainers>}
        ></Route>
        <Route path="/create" element={<CreateTrainer></CreateTrainer>}></Route>
      </Routes>
    </div>
  );
}
