import { Stack, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/authProvider";
import { NavBarRoute } from "./navRouter";

export default function NavBar(props: { routes: NavBarRoute[] }) {
  const userContext = useAuth();
  return (
    <Stack
      sx={{ bgcolor: "pink", marginBottom: "20px", padding: "10px" }}
      direction={"row"}
      alignItems="center"
      justifyContent="space-around"
    >
      {props.routes.map((route) => {
        return (
          <Link
            style={{ textDecoration: "none" }}
            key={route.route}
            to={route.route}
          >
            <Typography
              sx={{
                textDecoration: "none",
                fontWeight: "bold",
                color: "white",
              }}
              variant="h5"
              width={200}
            >
              {route.label}
            </Typography>
          </Link>
        );
      })}
      <Button variant="contained" color="primary" onClick= {()=>{userContext?.logout()}}>
        Log out
      </Button>
    </Stack>
  );
}
