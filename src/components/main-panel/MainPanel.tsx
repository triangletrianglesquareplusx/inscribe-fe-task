import Container from "@mui/material/Container";
import SingleNote from "../../data/single-note";

type MainPanelProps = {
    todos: SingleNote[] 
}

const MainPanel = ({todos}:MainPanelProps) => {
  return (
    <Container sx={{ p: 6 }}>
      This is where the tasks will be displayed. Current count is {todos.length}
    </Container>
  );
};

export default MainPanel;
