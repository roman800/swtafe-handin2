import { Link } from "react-router-dom";
import PersonalTrainers from "./pages/personal-trainers";

export default function ManagerHome() {
  return (
    <div>
      <div>Navbar</div>
      <Link to="create">Create new Trainer</Link>
      <PersonalTrainers></PersonalTrainers>
    </div>
  );
}
