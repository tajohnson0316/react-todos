import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import TodoForm from "./components/TodoForm";
import DisplayTodos from "./components/DisplayTodos";

function App() {
  const [todoList, setTodoList] = useState([
    {
      todoDescription: "This assignment",
      todoStatus: false,
    },
    {
      todoDescription: "Another assignment",
      todoStatus: false,
    },
    {
      todoDescription:
        "The same thing we do every night, Pinky: take over the world.",
      todoStatus: false,
    },
  ]);

  const addNewTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  const updateTodo = (todoIdx) => {
    const newList = todoList.map((todo, idx) => {
      if (idx === todoIdx) {
        const updatedTodo = { ...todo, todoStatus: !todo.todoStatus };
        return updatedTodo;
      }
      return todo;
    });
    setTodoList([...newList]);
  };

  const deleteTodo = (todoIndex) => {
    const newList = todoList.filter((_todo, idx) => idx !== todoIndex);
    setTodoList(newList);
  };

  return (
    <fieldset className="container">
      <legend>App.js</legend>
      <DisplayTodos
        todoList={todoList}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />
      <TodoForm addNewTodo={addNewTodo} />
    </fieldset>
  );
}

export default App;
