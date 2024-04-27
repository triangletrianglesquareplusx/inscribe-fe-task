import { TextField, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import Button from "../button/Button";

type TaskFormValues = {
  title: string;
  description: string;
};

const TaskForm = () => {
  const form = useForm<TaskFormValues>({
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: TaskFormValues) => {
    console.log(data);
    console.log("submitted the form!");
  };
  return (
    <>
      <h1>Testing form..</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Stack spacing={2} width={600}>
          <TextField
            label="Task definition"
            type="text"
            sx={{ width: 400, input: {color: 'white'} }}
            {...register("title", { required: "You must provide a title" })}
            error={!!errors.title}
            helperText={errors.title?.message}
            
          />
          <TextField
            label="Task description"
            type="text"
            sx={{ width: 400, input: {color: 'white'} }}
            {...register("description", {
              required: "You must provide a task description",
            })}
            error={!!errors.description}
            helperText={errors.description?.message}
          />
          <Button
            title="Create"
            variant="outlined"
            type="submit"
          />
        </Stack>
      </form>
    </>
  );
};

export default TaskForm;
