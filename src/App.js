import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import Carousel from "./components/home/Carousel";
import Tabs from "./components/home/Tabs";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <Home />
          </Route>
          <Route path="/users">
            <News />
          </Route>
          <Route path="/">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
