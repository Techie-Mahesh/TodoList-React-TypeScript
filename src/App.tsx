import { useState, FormEvent } from "react";
import InputField from "./components/InputField";
import TodosList from "./components/TodosList";
import { ITodos } from "./interface";

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<ITodos[]>([]);
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setTodos([
      ...todos,
      { id: Math.floor(Math.random() * 100).toString(), todo }
    ]);
    setTodo("");
  };

  console.log("todo ==?", todo, todos);

  return (
    <>
      <InputField handleSubmit={handleSubmit} setTodo={setTodo} todo={todo} />
      <TodosList todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
