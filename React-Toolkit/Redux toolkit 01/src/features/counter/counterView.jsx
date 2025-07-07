import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset , increaseByAmount} from './counterSlice';

export default function CounterView() {
 const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(increaseByAmount(5))}>Increase by 5</button>
    </div>
  );
}
