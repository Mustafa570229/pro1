import React from "react";
import { useEffect, useState } from "react";

const UseEffectEx = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("hallo effect");
  },[]);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count +1);
        }}
      >
        +
      </button>
      <label> this is {count}</label>

      <button
        onClick={() => {
          setCount(count + 11);
        }}
      >
        add 11
      </button>
    </div>
  );
};

export default UseEffectEx;
