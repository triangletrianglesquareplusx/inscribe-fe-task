import Container from "@mui/material/Container";
import { useContext } from "react";
import TodosContext from "../../context/todos";

const MainPanel = () => {
  const { todoTasks, setTodos } = useContext(TodosContext);
  return (
    <Container sx={{ p: 6 }}>
      This is where the tasks will be displayed. Current count is{" "}
      {todoTasks.length}
    </Container>
  );
};

export default MainPanel;
