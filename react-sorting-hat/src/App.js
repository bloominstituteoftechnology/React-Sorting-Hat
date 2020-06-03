import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import QuestionStepper from "./components/QuestionStepper";
import Header from "./components/Header";
import Welcome from "./components/Welcome";

import theme from "./ui/Theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
        <Route
            exact path="/"
            render={(props) => <Welcome {...props} />}
          />
          <Route
            path="/sort"
            render={(props) => <QuestionStepper {...props} />}
          />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
