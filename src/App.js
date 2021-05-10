import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Header from "./components/Header/Header";
import Admin from './pages/Admin/Admin';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Events from "./pages/Events/Events";
import Event from "./pages/Event/Event";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";


//Static
import "./App.scss";
import { Main } from "./lib/style/generalStyles";


class App extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <ScrollToTop>
        <Header />
        <Main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/admin" component={Admin} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/events" component={Events} />
            <Route path="/event/:id" component={Event} />
            <Redirect to="/" />
          </Switch>
        </Main>
        <Footer />
      </ScrollToTop>
    );
  }
}

export default App;
