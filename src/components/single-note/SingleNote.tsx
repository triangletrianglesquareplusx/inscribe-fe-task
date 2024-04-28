import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

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
        marginBottom: '1em'
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
    </Card>
  );
};

export default SingleNote;
