import axios from "axios";
import { User } from "../models/user";
import jwt_decode from "jwt-decode";
class AuthenticationService {
  private endpoint: string = process.env.REACT_APP_API_URL + "/api/Users";

  private user?: User;

  get currentUser(): Promise<User> | undefined {
    if (!!this.user) {
      return new Promise<User>(() => this.user);
    } else {
      const token = window.localStorage.getItem("jwt");
      if (!token) {
        return undefined;
      } else {
        return this.setUserFromToken(token);
      }
    }
  }

  constructor() {}

  async login(credentials: {
    email: string;
    password: string;
  }): Promise<{ user: User; token: string }> {
    // Get token
    const { data } = await axios.post<{ jwt: string }>(
      this.endpoint + "/login",
      credentials
    );
    const token = data.jwt;

    const user = await this.setUserFromToken(token);

    return { user, token };
  }

  private async setUserFromToken(token: string): Promise<User> {
    // Decode token
    const decodedToken = jwt_decode<Token>(token);
    axios.interceptors.request.use(function (config: any) {
      config.headers.Authorization = "Bearer " + token;
      return config;
    });
    // Get user
    const userResponse = await axios.get<User>(
      this.endpoint + "/" + decodedToken.UserId
    );

    this.user = userResponse.data;
    return this.user;
  }
}

export interface Token {
  Name: string;
  Role: string;
  UserId: number;
  nbf: number;
  exp: number;
}

export default new AuthenticationService();
