import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { actionCreator } from "./state/actionCreator";
import { IInitialState } from "./state/store";

function App() {
  const count = useSelector((store: IInitialState) => store.count);
  const dispatch = useDispatch();
  return (
    <>
      <div className="App">
        <button onClick={() => dispatch(actionCreator("increment"))}>
          Increment
        </button>
        <h1> {count} </h1>
        <button onClick={() => dispatch(actionCreator("decrement"))}>
          Decrement
        </button>
      </div>
    </>
  );
}

export default App;
