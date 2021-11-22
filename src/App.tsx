import "./App.css";
import { theme } from "./Theme";
import { ThemeProvider } from "@mui/material/styles";
import Login from "./Login/Login";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="//*" element={<Login></Login>}></Route>
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
