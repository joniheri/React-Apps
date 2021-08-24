/** @format */

import React, { useState, useContext } from "react";
import { Container } from "react-bootstrap";

import { AppContext } from "../contexts/GlobalContext";

export default function Content() {
  const [count, setCount] = useState(0);
  const [mobil, setMobil] = useState("Avanza");

  const [state, dispatch] = useContext(AppContext);

  console.log("DataStateGlobalContext: ", state);

  return (
    <Container>
      <h1>Nilai Count Awal: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Click me To +</button>
      <br></br>
      <br></br>
      <button onClick={() => setCount(count - 1)}>Click me To -</button>
      <br></br>
      <br></br>
      <h1>Your Car Name "{mobil}"</h1>
      <button onClick={() => setMobil("Innova")}>Click me To -</button>
      <br></br>
      <br></br>
      <h1>Data State from Global Context</h1>
      {state.dataUser == null ? (
        <></>
      ) : (
        <>
          <h4>{state.message}</h4>
          <p>ID : {state.dataUser.id}</p>
          <p>Name : {state.dataUser.name}</p>
        </>
      )}
      <button
        style={{ marginRight: "10px" }}
        onClick={() => {
          dispatch({
            type: "LOGIN",
          });
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "LOGOUT",
          });
        }}
      >
        Logout
      </button>
    </Container>
  );
}
