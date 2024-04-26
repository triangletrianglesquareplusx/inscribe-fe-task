import Container from "@mui/material/Container";
import { useState } from "react";
import notes from "../../data/notes";

const MainPanel = () => {
  const [todos, setTodos] = useState(notes);
  return (
    <Container sx={{ p: 6 }}>
      This is where the tasks will be displayed. Current count is {todos.length}
    </Container>
  );
};

export default MainPanel;
