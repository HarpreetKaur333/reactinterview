import { createStore } from "redux";

// Define the shape of the state
interface CounterState {
  count: number;
}

// Define the initial state
const initialState: CounterState = {
  count: 0,
};

// Define action types
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// Define action interfaces
interface IncrementAction {
  type: typeof INCREMENT;
}

interface DecrementAction {
  type: typeof DECREMENT;
}

// Combine action types
type CounterAction = IncrementAction | DecrementAction;

// Create the reducer
const counterReducer = (
  state = initialState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// Create the store
const store = createStore(counterReducer);

export default store;
