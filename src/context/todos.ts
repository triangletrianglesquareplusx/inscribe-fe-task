import SingleNote from "../data/single-note";
import { createContext, Dispatch, SetStateAction } from "react";

interface TodosContext {
  todos: SingleNote[];
  setTodos: Dispatch<SetStateAction<SingleNote[]>>;
}

const TodosContext = createContext<TodosContext>({
  todos: [],
  setTodos: () => {},
});

export default TodosContext;
