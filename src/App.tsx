import "./App.css";
import { theme } from "./Theme";
import { ThemeProvider } from "@mui/material/styles";
import { AuthProvider } from "./auth/authProvider";
import HomePage from "./homepage/homepage";
import { store } from "./state/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AuthProvider>
          <Provider store={store}>
            <div className="App">
              <HomePage></HomePage>
            </div>
          </Provider>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
