import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/Typography";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit";
import Button from "../button/Button";
import { useContext, useState } from "react";
import TodosContext from "../../context/todos";

type SingleNoteProps = {
  id: string;
  title: string;
  description: string;
  date: string;
};

const SingleNoteCard = ({ id, title, description, date }: SingleNoteProps) => {
  const { todos, setTodos } = useContext(TodosContext);
  const [isEdited, setIsEdited] = useState(false);

  const deleteParticularNote = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    console.log(id);
  };

  const editNote = () => {
    setIsEdited(true);
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
        <Box display="flex" flexDirection="column" gap={2}>
          <Button onClick={() => deleteParticularNote(id)}>
            <DeleteOutlinedIcon />
          </Button>
          <Button conClick={() => editNote()}>
            <EditIcon />
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default SingleNoteCard;
