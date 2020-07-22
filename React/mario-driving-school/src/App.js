import React from "react";
import ThemeProvider from 'styles/ThemeProvider';
import GlobalStyles from 'styles/GlobalStyles';
import { Home } from 'components/pages/';

const App = () => {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
}

export default App;
