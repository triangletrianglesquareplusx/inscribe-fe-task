import "./App.css";
import CommandPanel from "./components/command-panel/CommandPanel";
import MainPanel from "./components/main-panel/MainPanel";
import { useState } from "react";
import TodosContext from "./context/todos";
import notes from "./data/notes";
import { ToastContainer } from "react-toastify";

const App = ()=> {
  const [todoTasks, setTodos] = useState(notes);
  return (
    <div className="mainLayout">
      <TodosContext.Provider value={{ todoTasks, setTodos }}>
        <CommandPanel/>
        <MainPanel />
      </TodosContext.Provider>
      <ToastContainer/>
    </div>
  );
}

export default App;
