import React, { FormEvent, useEffect } from "react";
import { ISingleTodoProps } from "../interface";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

const SingleTodo: React.FC<ISingleTodoProps> = ({ todo, setTodos, todos }) => {
  const [isEditing, setIsEditing] = React.useState<boolean>(false);
  const [editedTodo, setEditedTodo] = React.useState<string>(todo.todo);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleEdit = (e: FormEvent<HTMLFormElement>, id: string): void => {
    e.preventDefault();
    setTodos(
      todos.map(todo => (todo.id === id ? { id, todo: editedTodo } : todo))
    );
    setIsEditing(false);
  };
  const handleDelete = (id: string): void => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };
  useEffect(() => {
    inputRef.current?.focus();
  }, [isEditing]);
  return (
    <form
      className="flex justify-between items-center p-2 border-2 border-gray-800 w-3/12 mx-auto mt-2 "
      onSubmit={e => handleEdit(e, todo.id)}
    >
      {isEditing ? (
        <input
          ref={inputRef}
          className="border-b-2 border-amber-500  focus:outline-none"
          value={editedTodo}
          onChange={e => {
            setEditedTodo(e.target.value);
          }}
        />
      ) : (
        <p className="truncate">{todo.todo}</p>
      )}
      <div className="flex gap-2">
        <span
          onClick={() => setIsEditing(!isEditing)}
          className="cursor-pointer text-blue-500 hover:text-blue-700"
        >
          <AiFillEdit size={24} />
        </span>
        <span
          onClick={() => handleDelete(todo.id)}
          className="cursor-pointer text-red-500 hover:text-red-700"
        >
          <MdDelete size={24} />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
