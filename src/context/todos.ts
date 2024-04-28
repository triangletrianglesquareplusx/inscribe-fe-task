import SingleNote from "../data/single-note";
import { createContext, Dispatch, SetStateAction } from "react";

interface TodosContext {
  todoTasks: SingleNote[];
  setTodos: Dispatch<SetStateAction<SingleNote[]>>;
}

const TodosContext = createContext<TodosContext>({
  todoTasks: [],
  setTodos: () => {},
});

export default TodosContext;
