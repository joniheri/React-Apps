import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

// import context
import { AppContext } from "../contexts/GlobalContext";

// import components
import Loading1 from "../pages/loading/Loading1";

export default function PrivateRoute({ component: Component, ...rest }) {
  const [state] = useContext(AppContext);
  const { isLoading, isLogin } = state;

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoading ? (
          <Loading1 />
        ) : isLogin ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
}
