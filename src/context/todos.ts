import SingleNote from "../data/single-note";
import { createContext } from "react";

const todos: SingleNote[] = [];
const TodosContext = createContext(todos);

export default TodosContext;