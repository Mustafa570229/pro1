import React from "react";
import { useState } from "react";

const StateFun = () => {
  const [count, setCount] = useState(0);
  const [text,setText]=useState("")
  function plus(){
    setCount(count+1)
  }

  function minus(){
    setCount(count-1)
  }
  
  console.log(text)



 

  return (
    <div>
      <button onClick={plus}> + </button>
      <button onClick={minus}> - </button>
      <label >Count is {count}</label>

      <input type="text"  value={text} onChange={(e)=>setText(e.target.value)}/>
    </div>
  );
};

export default StateFun;
