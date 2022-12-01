import React, { useState } from "react";
import shortid from "shortid";

const TodoForm = (props) => {
  const [text, setText] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();
    props.OnSubmit({
        id:shortid.generate(),
        text:text,
        compelet:false,
    })
    setText("")

  };
  const handeChange=(e)=>{
    setText(e.target.value)
  }
  return (
    <form className="form" onSubmit={handelSubmit}>
      <input
        className="input-field"
        type="text"
        placeholder="Enter a new Todo"
        value={text}
        onChange={handeChange}
      />
      <button className="btn" onClick={handelSubmit}>
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
