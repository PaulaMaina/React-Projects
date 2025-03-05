import { useState } from "react";

export default function Counter() {
  // You can initialize the state variable in the useState hook
  const [count, setCount] = useState(0); //Count is the state variable and setCount is the function that manipulates the state variable
  const [incrementBy, setIncrementBy] = useState(5);
  function incrementClick() {
    setCount(count + incrementBy);
  }
  function decrementClick() {
    setCount(count - incrementBy);
  }

  function increaseIncrement() {
    setIncrementBy(incrementBy + 1);
  }
  function decreaseIncrement() {
    setIncrementBy(incrementBy - 1);
  }
  return (
    <div>
      <h1>Count value is : {count}</h1>
      <button onClick={incrementClick}>Increment</button>
      <button onClick={decrementClick}>Decrement</button>

      <h1>We are incrementing the value by: {incrementBy}</h1>
      <button onClick={increaseIncrement}>Increase increment</button>
      <button onClick={decreaseIncrement}>Decrease Increment</button>
    </div>
  );
}
