import React, { useState } from "react";
import TodoForm from "./components/ToDoForm";
import "./components/App.css";
import TodoComp from "./components/TodoComp";

const App = () => {
  let [todos, setTodos] = useState([]);
  const [todoToShow, setTodoToShow] = useState("all");
  

  const AddTodo = (todo) => {
    setTodos([todo, ...todos]);
  };
  const toggle=(id)=>{
    setTodos(todos.map((todo)=>{
      if(todo.id===id){
        return{
        ...todo,
        compelet:!todo.compelet,
      }}
      else{
        return todo
      }
    })

    )
  }
  const updateToShow = (s) => {
    setTodoToShow(s);
  };
  if (todoToShow === "active") {
    todos = todos.filter((todo) => {
      return !todo.compelet;
    });
  } else if (todoToShow === "compelet") {
    todos = todos.filter((todo) => {
      return todo.compelet;
    });
  }
  const removeAllCompeleteTodos=()=>{
    setTodos(todos.filter((todo)=>{
      return !todo.compelet
    }))
  }
  const handelDelete = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };
  return (
    <div className="container">
      <TodoForm OnSubmit={AddTodo} />
      {todos.map((todo) => {
        return (
          <div>
            <TodoComp
              key={todo.id}
              todo={todo}
              onDelete={() => {
                handelDelete(todo.id);
              }}
              toggle={()=>toggle(todo.id)}
            />
          </div>
        );
      })}
      <div>
        <button className="update-btn btn" onClick={() => updateToShow("all")}> All</button>
        <button className="update-btn btn"onClick={() => updateToShow("active")}
        >
          Active
        </button>
        <button
          className="update-btn btn"
          onClick={() => updateToShow("compelet")}
        >
          Compelet
        </button>

      </div>
      <button className="all-btn btn" onClick={removeAllCompeleteTodos}>Remove all compelete todos</button>
     
    </div>
  );
};


export default App;
