import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Order_B from "./pages/Order_B";
import Order_C from "./pages/Order_C";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider
      theme={{
        palette: {
          baemin: "#4ac1bc",
          coupang: "#20ccf5",
        },
      }}
    >
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/order_b" component={Order_B} />
          <Route path="/order_c" component={Order_C} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
