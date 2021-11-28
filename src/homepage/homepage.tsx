import authenticationService from "../services/authentication-service";
import { User, UserAccountType } from "../models/user";
import ManagerHome from "../manager/managerhome";
import ClientHome from "../client/clienthome";
import TrianerHome from "../trainer/trainerhome";
import { useEffect, useState } from "react";
export default function HomePage() {
  const [user, setUser] = useState<User | undefined>();

  useEffect(() => {
    async function run() {
      const user = await authenticationService.currentUser;
      setUser(user);
    }
    run();
  }, []);

  const homepageLUT: { [key in UserAccountType]: JSX.Element } = {
    Manager: <ManagerHome></ManagerHome>,
    Client: <ClientHome></ClientHome>,
    PersonalTrainer: <TrianerHome></TrianerHome>,
  };

  return user ? homepageLUT[user.accountType] : <></>;
}
