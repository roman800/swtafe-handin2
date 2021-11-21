import { Exercise } from "./exercise";

export interface WorkoutProgram {
  workoutProgramId: number;
  name: string;
  description: string;
  exercises: Exercise[];
  personalTrainerId: number;
  clientId: number;
}
