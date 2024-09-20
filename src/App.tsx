import React from 'react';

import { useAppSelector, useAppDispatch } from './hooks';
import { increment, decrement, addValue } from './redux/slices/counterSlice';

const buttonStyles: React.CSSProperties = {
  border: '1px solid #ccc',
  padding: 10,
  margin: 5,
};

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const counter = useAppSelector((state) => state.counter);

  return (
    <div>
      <p>
        <span>Текущий счётчик:</span>
        <span>{counter}</span>
      </p>

      <button
        type="button"
        style={buttonStyles}
        onClick={() => dispatch(decrement())}
      >
        - Decrement
      </button>

      <button
        type="button"
        style={buttonStyles}
        onClick={() => dispatch(increment())}
      >
        + Increment
      </button>

      <button
        type="button"
        style={buttonStyles}
        onClick={() => dispatch(addValue(10))}
      >
        + 10
      </button>
    </div>
  );
};

export default App;
