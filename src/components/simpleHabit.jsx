import React, { useCallback, useRef, useState } from "react";

const SimpleHabit = (props) => {
  const [count, setCount] = useState(0);
  const spanRef = useRef();

  const handleIncreament = useCallback(() => {
    setCount(count + 1);
  });

  return (
    <>
      <li className="habit">
        <span ref={spanRef} className="habit-name">
          Reading
        </span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={handleIncreament}
        >
          <i className="fas fa-plus-square" />
        </button>
      </li>
    </>
  );
};
export default SimpleHabit;
