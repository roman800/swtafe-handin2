import { useAuth } from "../auth/authProvider";
import ClientHome from "../client/clienthome";
import ManagerHome from "../manager/managerhome";
import { UserAccountType } from "../models/user";
import TrianerHome from "../trainer/trainerhome";
export default function HomePage() {
  const context = useAuth();

  const homepageLUT: { [key in UserAccountType]: JSX.Element } = {
    Manager: <ManagerHome></ManagerHome>,
    Client: <ClientHome></ClientHome>,
    PersonalTrainer: <TrianerHome></TrianerHome>,
  };

  return context?.user?.accountType ? (
    homepageLUT[context.user.accountType as UserAccountType]
  ) : (
    <></>
  );
}
