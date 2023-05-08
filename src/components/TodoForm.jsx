import React, { useState } from "react";

const TodoForm = (props) => {
  const [todoDescription, setTodoDescription] = useState("");
  const [todoStatus] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();

    const newTodo = {
      todoDescription,
      todoStatus,
    };

    props.addNewTodo(newTodo);

    setTodoDescription("");
  };

  return (
    <fieldset>
      <form onSubmit={submitForm}>
        <div className="mb-3">
          <label htmlFor="todoDescription" className="form-label">
            Todo Description
          </label>
          <input
            type="text"
            className="form-control"
            id="todoDescription"
            onChange={(e) => setTodoDescription(e.target.value)}
            value={todoDescription}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </fieldset>
  );
};

export default TodoForm;
