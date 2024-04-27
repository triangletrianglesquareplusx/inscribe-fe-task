import "./App.css";
import CommandPanel from "./components/command-panel/CommandPanel";
import MainPanel from "./components/main-panel/MainPanel";
import { useState } from "react";
import notes from "./data/notes";

function App() {
  const [todos, setTodos] = useState(notes);
  return (
    <div className="mainLayout">
      <CommandPanel handleTodos={setTodos} />
      <MainPanel todos={todos} />
    </div>
  );
}

export default App;
