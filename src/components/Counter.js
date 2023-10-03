import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {};

  const incrementHandler = () => {
    dispatch({ type: "incrementBy2" });
  };
  const decrementHandler = () => {
    dispatch({ type: "decrementBy2" });
  };

  const incrementBy5Handler = () => {
    dispatch({ type: "incrementBy5" });
  };

  const decrementBy5Handler = () => {
    dispatch({ type: "decrementBy5" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Plus 2</button>
        <button onClick={decrementHandler}>Minus 2</button>
        <button onClick={incrementBy5Handler}>Plus 5</button>
        <button onClick={decrementBy5Handler}>Minus 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
