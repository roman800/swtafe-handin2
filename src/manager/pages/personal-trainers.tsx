import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../state/store";
import { getUsers } from "../../state/user/user-slice";
export default function PersonalTrainers() {
  const trainers = useSelector((state: AppState) => state.userReducer.trainers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div>
      <div>Trainers:</div>
      {trainers.map((trainer) => {
        return <div>{trainer.firstName}</div>;
      })}
    </div>
  );
}
