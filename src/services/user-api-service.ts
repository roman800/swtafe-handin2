import axios from "axios";
import { User } from "../models/user";

class UserAPIService {
  private endpoint!: string;

  constructor() {
    this.endpoint = process.env.REACT_APP_API_URL + "/api/Users";
  }

  async getById(id: number): Promise<User> {
    const userResponse = await axios.get<User>(this.endpoint + "/Users/" + id);
    return userResponse.data;
  }
}

const userAPIService = new UserAPIService();

export default userAPIService;
