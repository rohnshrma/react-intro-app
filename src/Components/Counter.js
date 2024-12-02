// Importing the Button component from the react-bootstrap library
// This allows us to use pre-styled buttons in our UI.
import { Button } from "react-bootstrap";

// Define the reducer function that manages the state of the counter.
// This function takes the current state (`previousCounter`) and an action as arguments.
// Based on the action type, it decides how to update the state.
const counterReducer = (previousCounter, action) => {
  // Log the previous state and the action to the console for debugging.
  console.log("Previous =>", previousCounter, "Action =>", action);

  // If the action type is "INCREASE", increment the `count` by 1.
  if (action.type === "INCREASE") {
    return {
      count: previousCounter.count + 1, // Update the count by adding 1.
    };
  }

  // If the action type is "DECREASE", decrement the `count` by 1.
  if (action.type === "DECREASE") {
    return {
      count: previousCounter.count - 1, // Update the count by subtracting 1.
    };
  }

  // If the action type is "INCREMENT", increment the `count` by a specific value (`action.payload`).
  if (action.type === "INCREMENT") {
    return {
      count: previousCounter.count + action.payload, // Update the count by adding the payload value.
    };
  }

  // If the action type is not recognized, return the initial state (default behavior).
  return initialState;
};

// Define the initial state of the counter.
// This is the starting point for the counter's value.
const initialState = {
  count: 0, // The counter starts at 0.
};

// Define the Counter component, which renders the UI and manages the counter logic.
const Counter = () => {
  // Use the `useReducer` hook to manage the state of the counter.
  // `counterReducer` is the reducer function, and `initialState` is the starting state.
  const [counterState, dispatch] = useReducer(counterReducer, initialState);

  // Define a handler for increasing the counter by 1.
  const increaseHandler = () => {
    dispatch({ type: "INCREASE" }); // Dispatch an action of type "INCREASE".
  };

  // Define a handler for decreasing the counter by 1.
  const decreaseHandler = () => {
    dispatch({ type: "DECREASE" }); // Dispatch an action of type "DECREASE".
  };

  // Define a handler for incrementing the counter by 50.
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT", payload: 50 }); // Dispatch an action with a payload of 50.
  };

  // Return the JSX for the Counter component.
  // This includes a heading to display the counter value and buttons to trigger actions.
  return (
    <div>
      {/* Display the current counter value */}
      <h2>Counter : {counterState.count}</h2>

      {/* Button to increase the counter */}
      <Button onClick={increaseHandler} type="button" variant="primary">
        Increase
      </Button>

      {/* Button to decrease the counter */}
      <Button onClick={decreaseHandler} type="button" variant="primary">
        Decrease
      </Button>

      {/* Button to increment the counter by 50 */}
      <Button onClick={incrementHandler} type="button" variant="primary">
        Increase by 50
      </Button>
    </div>
  );
};

// Export the Counter component so it can be used in other parts of the application.
export default Counter;

// 1.	Reducer Function: Manages state transitions based on actions.
// 2.	useReducer Hook: A React hook for managing state with a reducer function.
// 3.	Actions: Objects that describe what change should happen (e.g., { type: "INCREASE" }).
// 4.	Initial State: The starting value for your state.
// 5.	Dispatch: Sends actions to the reducer to update the state.
// 6.	JSX: A syntax for defining React components and UI structure.
// 7.	Event Handlers: Functions triggered by user interactions (e.g., button clicks).
