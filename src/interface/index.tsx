export interface ITodos {
  id: string;
  todo: string;
}

export interface ITodosListProps {
  todos: ITodos[];
  setTodos: React.Dispatch<React.SetStateAction<ITodos[]>>;
}

export interface ISingleTodoProps {
  todo: ITodos;
  setTodos: React.Dispatch<React.SetStateAction<ITodos[]>>;
  todos: ITodos[];
}
