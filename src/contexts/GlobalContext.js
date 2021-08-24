import React, { createContext, useReducer } from "react";

export const AppContext = createContext();

const initialState = {
  isLogin: false,
  message: null,
  dataUser: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLogin: true,
        message: "Login Success!",
        dataUser: {
          id: "1",
          name: "hafiz",
        },
      };
    case "LOGOUT":
      return {
        ...state,
        isLogin: false,
        message: null,
        dataUser: null,
      };
    default:
      throw new Error();
  }
};

export const AppContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={[state, dispatch]}>
      {props.children}
    </AppContext.Provider>
  );
};
