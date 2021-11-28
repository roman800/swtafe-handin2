export interface User {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  personalTrainerId: number;
  accountType: UserAccountType;
}

export type UserAccountType = "PersonalTrainer" | "Client" | "Manager";
