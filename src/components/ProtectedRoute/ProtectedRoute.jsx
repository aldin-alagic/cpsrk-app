import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, isAdmin, ...rest }) => {
  const isAdminStorage = localStorage.getItem("isAdmin");
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAdmin || isAdminStorage === "true") {
          return <Component {...rest} {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
