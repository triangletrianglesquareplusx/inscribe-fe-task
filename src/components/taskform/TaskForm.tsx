import { TextField, Stack } from "@mui/material";
import Button from "../button/Button";

const TaskForm = () => {
  return (
    <>
      <h1>Testing form..</h1>
      <form noValidate>
        <Stack spacing={2} width={600}>
          <TextField label="Task definition" type="text" sx={{width:400}}/>
          <TextField label="Task description" type="text" sx={{width:400}}/>
          <Button
            title="Create"
            variant="outlined"
            onClick={() => console.log("hey")}
          />
        </Stack>
      </form>
    </>
  );
};

export default TaskForm;
