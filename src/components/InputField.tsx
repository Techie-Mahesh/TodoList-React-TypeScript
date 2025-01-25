import React, { FormEvent } from "react";

interface InputFieldProps {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField: React.FC<InputFieldProps> = ({
  handleSubmit,
  todo,
  setTodo
}) => {
  return (
    <div className="mt-10">
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center gap-2"
      >
        <input
          type="text"
          placeholder="Enter Text"
          value={todo}
          onChange={e => setTodo(e.target.value)}
          className="border-2 border-gray-800 p-2 w-1/3"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
        >
          Go
        </button>
      </form>
    </div>
  );
};

export default InputField;
