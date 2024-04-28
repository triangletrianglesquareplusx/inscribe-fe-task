import Container from "@mui/material/Container";
import { useContext } from "react";
import TodosContext from "../../context/todos";
import SingleNote from "../single-note/SingleNoteCard";
import { Grid } from "@mui/material";

const MainPanel = () => {
  const { todos } = useContext(TodosContext);
  return (
    <Container sx={{ p: 6, width: "70%" }}>
      <Grid container spacing={2}>
        {todos.map((todo) => (
          <Grid item xs={12} md={6} lg={4} key={todo.id}>
            <SingleNote
              id={todo.id}
              title={todo.title}
              description={todo.description}
              date={todo.date}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MainPanel;
