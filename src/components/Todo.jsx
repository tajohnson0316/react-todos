import React from "react";

const Todo = (props) => {
  const todoDescriptionStyling = () => {
    if (props.todo.todoStatus) {
      return (
        <label
          className="form-check-label text-decoration-line-through"
          htmlFor={props.idx}
        >
          {props.todo.todoDescription}
        </label>
      );
    } else {
      return (
        <label className="form-check-label" htmlFor={props.idx}>
          {props.todo.todoDescription}
        </label>
      );
    }
  };

  return (
    <li className="d-flex align-items-center justify-content-between mx-3 gap-3">
      <div className="mb-3 form-check">
        {todoDescriptionStyling()}
        <input
          type="checkbox"
          className="form-check-input"
          id={props.idx}
          onChange={() => {
            props.updateTodo(props.idx);
          }}
          checked={props.todo.todoStatus}
        />
      </div>
      <div>
        <button
          className="btn btn-danger"
          onClick={() => props.deleteTodo(props.idx)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Todo;
