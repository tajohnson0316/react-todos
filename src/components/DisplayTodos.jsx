import React from "react";
import Todo from "./Todo";

const DisplayTodos = (props) => {
  return (
    <fieldset>
      <div className="card mb-5">
        <div className="card-header">
          <h2>Todo List</h2>
        </div>
        <div className="card-body">
          <ul>
            {props.todoList.map((todo, idx) => {
              return (
                <Todo
                  key={idx}
                  todo={todo}
                  idx={idx}
                  deleteTodo={props.deleteTodo}
                  updateTodo={props.updateTodo}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </fieldset>
  );
};

export default DisplayTodos;
