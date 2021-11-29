import {
  createContext,
  FC,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Login, User } from "../api/api";
import { apiClient } from "../state/api-clients";
import jwt_decode from "jwt-decode";
import LoginForm from "../login/loginForm";

interface IAuthContext {
  isAuthenticated: boolean;
  user: User | undefined;
  login: (email: string, password: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = useCallback(async (email, password) => {
    const { jwt } = await apiClient.login({ email, password } as Login);

    if (jwt) {
      localStorage.setItem("jwt", jwt);

      setIsAuthenticated(true);

      // Decode token
      const { Name, UserId, Role } = jwt_decode<JWTToken>(jwt);

      setUser({ firstName: Name, userId: UserId, accountType: Role } as User);
    }
  }, []);

  const logout = useCallback(async()=>{
    setIsAuthenticated(false);
    setUser(undefined);
  }, []);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      const { exp } = jwt_decode<JWTToken>(jwt);
      const expDate = new Date(exp * 1000);
      if (expDate.getTime() > Date.now()) {
        setIsAuthenticated(true);

        // Decode token
        const { Name, UserId, Role } = jwt_decode<JWTToken>(jwt);

        setUser({ firstName: Name, userId: UserId, accountType: Role } as User);
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {isAuthenticated ? children : <LoginForm></LoginForm>}
    </AuthContext.Provider>
  );
};

export interface JWTToken {
  Name: string;
  Role: string;
  UserId: number;
  nbf: number;
  exp: number;
}
