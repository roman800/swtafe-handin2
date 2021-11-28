import { useSelector } from "react-redux";
import { AppState } from "../../state/store";
export default function PersonalTrainers() {
  const trainers = useSelector((state: AppState) => state.userReducer.trainers);

  return (
    <div>
      <div>Trainers:</div>
      {trainers.map((trainer) => {
        return <div>{trainer.firstName}</div>;
      })}
    </div>
  );
}
