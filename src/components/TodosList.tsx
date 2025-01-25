import React from "react";
import { ITodosListProps } from "../interface";
import SingleTodo from "./SingleTodo";

const TodosList: React.FC<ITodosListProps> = ({ todos, setTodos }) => {
 
  return todos.length > 0 ? (
    <div className="mt-10">
      {todos.map(todo => (
        <SingleTodo
          key={todo.id}
          todo={todo}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  ) : (
    <div className="mt-10">
      <h1 className="text-2xl text-center">No Todos</h1>
    </div>
  );
};

export default TodosList;
