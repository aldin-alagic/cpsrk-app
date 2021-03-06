import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

import Events from "./pages/Events/Events";
import Event from "./pages/Event/Event";
import Home from "./pages/Home/Home";


//Static
import "./App.scss";

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
            <Route path="/events" component={Events} />
            <Route path="/event" component={Event} />
            <Route path="/" component={Home} />
            <Redirect to="/" />
          </Switch>
        </Main>
        <Footer />
      </ScrollToTop>
    );
  }
}

export default App;
