export interface Exercise extends ExerciseDTO {
  exerciseId: number;
  workoutProgramId: number;
  personalTrainerId: number;
}

export interface ExerciseDTO {
  name: string;
  description: string;
  sets: number;
  repetitions: number;
  time: string;
}
