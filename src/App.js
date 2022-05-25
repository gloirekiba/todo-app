import { useState, useRef, useEffect } from "react";

import TodoList from "./components/TodoList";
import RandomNum from "./utils/RandomNum";

const LOCAL_STORAGE_KEY = "todoapp";

const App = () => {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function clearTodo() {
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  }

  function addTodo(e) {
    e.preventDefault();
    const name = todoNameRef.current.value;
    if (name.trim() === "") return;
    setTodos([...todos, { id: RandomNum(), name, complete: false }]);
    todoNameRef.current.value = null;
  }

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <form onSubmit={addTodo}>
        <input ref={todoNameRef} type="text" autoFocus />
        <div>
          <button type="submit">Add Todo</button>
          <button onClick={clearTodo}>Clear Complete</button>
        </div>
      </form>
      <div>{todos.filter((todo) => !todo.complete).length} todo(s) left</div>
    </>
  );
};

export default App;
