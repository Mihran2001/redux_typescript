import { createStore } from "redux";
import { reducer } from "./reducers";

export interface IInitialState {
  count: number;
}

type reducerType = ReturnType<typeof reducer>;

const initialState: IInitialState = {
  count: 0,
};

export const store = createStore(reducer, initialState);
