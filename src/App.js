import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";

//Static
import "./App.scss";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Main>
          <Route path="/" component={Home} />
          <Redirect to="/" />
        </Main>
        <Footer />
      </>
    );
  }
}

export default App;
