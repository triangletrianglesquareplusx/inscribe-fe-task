import "./App.css";
import CommandPanel from "./components/command-panel/CommandPanel";
import MainPanel from "./components/main-panel/MainPanel";

function App() {
  return (
    <div className="mainLayout">
      <CommandPanel />
      <MainPanel />
    </div>
  );
}

export default App;
