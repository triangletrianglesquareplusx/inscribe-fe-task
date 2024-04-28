import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/Typography";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import Button from "../button/Button";
import { useContext } from "react";
import TodosContext from "../../context/todos";

type SingleNoteProps = {
  title: string;
  description: string;
  date: string;
};

const SingleNoteCard = ({ title, description, date }: SingleNoteProps) => {
  const {todos, setTodos} = useContext(TodosContext)

  const deleteParticularNote = (id: string) => {
    setTodos(todos.filter(todo=>todo.id !== id))
    console.log(id)
  };
  
  return (
    <Card
      sx={{
        minWidth: "70%",
        backgroundColor: "inherit",
        color: "white",
        border: "1px solid gray",
        marginBottom: "1em",
        display: "flex",
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
        <Typography variant="h5" component="div">
          {date}
        </Typography>
      </CardContent>
      <CardActions sx={{ p: 1.3 }}>
        <Button onClick={deleteParticularNote}>
          <DeleteOutlinedIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

export default SingleNoteCard;
