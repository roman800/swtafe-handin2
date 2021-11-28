import "./App.css";
import { theme } from "./Theme";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./auth/authProvider";
import HomePage from "./homepage/homepage";
import { store } from "./state/store";
import { Provider } from "react-redux";
import CreateTrainer from "./manager/pages/createTrainer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Provider store={store}>
          <div className="App">
            <Router>
              <Routes>
                <Route path="//*" element={<HomePage></HomePage>}></Route>

                <Route
                  path="create"
                  element={<CreateTrainer></CreateTrainer>}
                ></Route>
              </Routes>
            </Router>
          </div>
        </Provider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
