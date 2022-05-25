import Todo from "./Todo";

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <>
      {todos.map((todo) => (
        <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />
      ))}
    </>
  );
};

export default TodoList;
