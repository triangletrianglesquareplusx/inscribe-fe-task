import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/Typography";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import Button from "../button/Button";

type SingleNoteProps = {
  title: string;
  description: string;
  date: string;
};

const SingleNote = ({ title, description, date }: SingleNoteProps) => {
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
      <CardActions>
        <Button>
          <DeleteOutlinedIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

export default SingleNote;
