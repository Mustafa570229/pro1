import React from "react";

const TodoComp = (props) => {
  return (
    <div className="d-f">
      <div
        style={{ textDecoration: props.todo.compelet ? "line-through" : "" }}
        onClick={props.toggle}
      >
        {props.todo.text}
      </div>
      <button className="delete-btn" onClick={props.onDelete}>
        x
      </button>
    </div>
  );
};

export default TodoComp;
