import "./App.css";
import CommandPanel from "./components/command-panel/CommandPanel";
import MainPanel from "./components/main-panel/MainPanel";
import { useState } from "react";
import TodosContext from "./context/todos";
import notes from "./data/notes";

function App() {
  const [todoTasks, setTodos] = useState(notes);
  return (
    <div className="mainLayout">
      <TodosContext.Provider value={{ todoTasks, setTodos }}>
        <CommandPanel/>
        <MainPanel />
      </TodosContext.Provider>
    </div>
  );
}

export default App;
