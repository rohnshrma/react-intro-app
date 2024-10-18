import { Button } from "react-bootstrap";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseHandler = () => {
    setCount(count + 1);
  };

  const decreaseHandler = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Counter : {count}</h2>
      <Button onClick={increaseHandler} type="button" variant="primary">
        Increase
      </Button>
      <Button onClick={decreaseHandler} type="button" variant="primary">
        Decrease
      </Button>
    </div>
  );
};

export default Counter;
