import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { CounterActions } from "../Store";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const dispatch = useDispatch();
  const toggleCounterHandler = () => {};

  const incrementHandler = () => {
    dispatch(CounterActions.incrementBy2(2));
  };
  const decrementHandler = () => {
    dispatch(CounterActions.decrementBy2(2));
  };

  const incrementBy5Handler = () => {
    dispatch(CounterActions.incrementBy5(5));
  };

  const decrementBy5Handler = () => {
    dispatch(CounterActions.deccrementBy5(5));
  };

  const toggleCounter = () => {
    dispatch(CounterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Plus 2</button>
        <button onClick={decrementHandler}>Minus 2</button>
        <button onClick={incrementBy5Handler}>Plus 5</button>
        <button onClick={decrementBy5Handler}>Minus 5</button>
      </div>
      <button onClick={toggleCounter}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
