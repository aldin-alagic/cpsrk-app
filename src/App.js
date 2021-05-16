import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Header from "./components/Header/Header";
import Admin from './pages/Admin/Admin';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Event from "./pages/Event/Event";
import Events from "./pages/Events/Events";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";

import "./App.scss";
import { Main } from "./lib/style/generalStyles";

const App = () => {
  return (
    <ScrollToTop>
      <Header />
      <Main>
        <Switch>
          <Route path="/admin" component={Admin} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/event/:id" component={Event} />
          <Route path="/events" component={Events} />
          <Route exact path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </Main>
      <Footer />
    </ScrollToTop>
  );
}

export default App;
