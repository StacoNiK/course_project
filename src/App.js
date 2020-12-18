import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {Container} from "react-bootstrap";

import AppNavbar from './components/AppNavbar';
import Catalog from './pages/Catalog';
import Contacts from './pages/Contacts';
import Order from "./pages/Order";
import Auth from "./pages/Auth";
import Tours from "./pages/Tours";
import ToursAdd from "./pages/ToursAdd";
import ToursRequests from "./pages/ToursRequests";
import ToursRequestsAdd from "./pages/ToursRequestsAdd";
import Persons from "./pages/Persons";

export default function App() {
  return (
      <Router>
          <AppNavbar/>
        <Container className="dr-example-container">
          <Switch>
            <Route path="/Auth">
              <Auth />
            </Route>
            <Route path="/order/:id">
              <Order />
            </Route>
            <Route path="/contacts">
              <Contacts />
            </Route>

            <Route path="/tours/add">
              <ToursAdd />
            </Route>

            <Route path="/tours/requests/add">
              <ToursRequestsAdd />
            </Route>

            <Route path="/tours/requests">
              <ToursRequests />
            </Route>

            <Route path="/tours">
              <Tours />
            </Route>

            <Route path="/persons">
              <Persons />
            </Route>

            <Route path="/">
              <Catalog />
            </Route>
          </Switch>
        </Container>
      </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}