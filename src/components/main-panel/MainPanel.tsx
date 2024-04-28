import Container from "@mui/material/Container";
import { useContext } from "react";
import TodosContext from "../../context/todos";
import SingleNote from "../single-note/SingleNote";

const MainPanel = () => {
  const { todos } = useContext(TodosContext);
  return (
    <Container sx={{ p: 6, width: '70%' }}>
      This is where the tasks will be displayed. Current count is {todos.length}
      {todos.map((todo) => (
        <SingleNote
          key={todo.id}
          title={todo.title}
          description={todo.description}
          date={todo.date}
        />
      ))}
    </Container>
  );
};

export default MainPanel;
