import React from 'react';
import Login from "./components/security/Login";
import {ThemeProvider} from "@material-ui/core";
import theme from "./theme/theme";
import SignUp from "./components/security/SignUp";
import Nav from "./components/Nav/Nav";
function App() {
  return (

      <ThemeProvider theme={theme}>
          <Nav></Nav>
          <SignUp/>
      </ThemeProvider>

  );
}

export default App;
