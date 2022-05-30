const Todo = ({ todo, toggleTodo }) => {
  function handleToggle() {
    toggleTodo(todo.id);
  }

  return (
    <div className="todo">
      <label>
        <input onChange={handleToggle} type="checkbox" checked={todo.complete} />
        <span>{todo.name}</span>
      </label>
    </div>
  );
};

export default Todo;
