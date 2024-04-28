import Container from "@mui/material/Container";
import { useContext } from "react";
import TodosContext from "../../context/todos";
import SingleNote from "../single-note/SingleNoteCard";

const MainPanel = () => {
  const { todos } = useContext(TodosContext);
  return (
    <Container sx={{ p: 6, width: '70%' }}>
      {todos.map((todo) => (
        <SingleNote
          key={todo.id}
          id={todo.id}
          title={todo.title}
          description={todo.description}
          date={todo.date}
        />
      ))}
    </Container>
  );
};

export default MainPanel;
