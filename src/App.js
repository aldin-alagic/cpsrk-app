import React, { useContext, useEffect } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Header from "./components/Header/Header";
import Admin from "./pages/Admin/Admin";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Event from "./pages/Event/Event";
import Events from "./pages/Events/Events";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";

import "./App.scss";
import { AuthContext } from "./context/AuthContext";
import { Main } from "./lib/style/generalStyles";
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

const App = () => {
  const { setIsLoggedIn, setIsAdmin, isLoggedIn, isAdmin } = useContext(AuthContext);

  const handleLogout = () => {
    console.log("loging out");
    localStorage.removeItem("authToken");
    localStorage.removeItem("isAdmin");
    setIsLoggedIn(false);
    setIsAdmin(false);
  }

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    const isAdminNew = localStorage.getItem("isAdmin");

    setIsLoggedIn(authToken ? true : false);
    setIsAdmin(isAdminNew === "true" ? true : false);
    
  }, [isLoggedIn, isAdmin, setIsLoggedIn, setIsAdmin]);


  return (
    <ScrollToTop>
      <Header isLoggedIn={isLoggedIn} isAdmin={isAdmin} onLogout={handleLogout} />
      <Main>
        <Switch>
          <ProtectedRoute isAdmin={isAdmin} path="/admin" component={Admin} />
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
};

export default App;
