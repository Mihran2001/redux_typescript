import { Reducer } from "redux";

type IState = {
  count: number;
};

interface IAction {
  type: string;
}

export const reducer: Reducer<IState, IAction> = (
  state = { count: 0 },
  action
) => {
  switch (action.type) {
    case "increment":
      return {
        count: ++state.count,
      };
    case "decrement":
      return {
        count: --state.count,
      };
    default:
      return state;
  }
};

// type g<t = any> = {
//   state: t | undefined;
// };

// const yy: g<string> = { state: undefined };

// console.log(yy);
