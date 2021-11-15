import React from 'react';
import './App.css';
import Login from './Login/Login';

import { theme } from './Theme';
import { ThemeProvider } from '@mui/material/styles';

function App() {
  return (
  <ThemeProvider theme={theme} >
    <div className="App">
      <Login></Login>
    </div>
    </ThemeProvider>
  );
}

export default App;
