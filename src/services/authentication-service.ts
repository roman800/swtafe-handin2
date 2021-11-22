import axios from "axios";
import { User } from "../models/user";
import jwt_decode from "jwt-decode";
class AuthenticationService {
  private endpoint!: string;

  private user?: User;

  get currentUser(): User | undefined {
    return this.user;
  }

  constructor() {
    this.endpoint = process.env.REACT_APP_API_URL + "/api/Users";
  }

  async login(credentials: {
    email: string;
    password: string;
  }): Promise<{ user: User; token: string }> {
    // Get token
    const tokenResponse = await axios.post<{ jwt: string }>(
      this.endpoint + "/login",
      credentials
    );

    // Decode token
    const decodedToken = jwt_decode<Token>(tokenResponse.data.jwt);
    axios.interceptors.request.use(function (config: any) {
      config.headers.Authorization = 'Bearer ' + tokenResponse.data.jwt;
      return config;
  }, function (error: any) {
      return Promise.reject(error);
  });
    // Get user
    const userResponse = await axios.get<User>(
      this.endpoint + "/" + decodedToken.UserId
    );

    this.user = userResponse.data;

    return { user: this.user, token: tokenResponse.data.jwt };
  }
}

const authenticationService = new AuthenticationService();

export interface Token {
  Name: string;
  Role: string;
  UserId: number;
  nbf: number;
  exp: number;
}

export default authenticationService;
