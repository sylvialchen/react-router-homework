import React from "react";
import './App.css';
import { Route, BrowserRoutes, Routes, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Stock from "./pages/Stock";
import Home from "./pages/Home";
import allStocks from "./stock-data";


function App(props) {

  return (
    <div className="App">
      <Nav />
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/stocks/:symbol" render={(routerProps) => <Stock theseStocks={allStocks} {...routerProps}/>} />
        <Route path="/stocks/" render={() => <Dashboard theseStocks={allStocks} />} />
     
      </Switch>
    </div>
  );
}

export default App;
