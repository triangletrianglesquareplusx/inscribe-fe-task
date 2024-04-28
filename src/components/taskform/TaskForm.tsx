import { TextField, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import Button from "../button/Button";
import notifyPositive from "../../helpers/toast";
import { useContext } from "react";
import TodosContext from "../../context/todos";
import { v4 as uuidv4 } from "uuid";

type TaskFormValues = {
  title: string;
  description: string;
};

const TaskForm = () => {
  const { todos, setTodos } = useContext(TodosContext);
  const form = useForm<TaskFormValues>({
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: TaskFormValues) => {
    const { title, description } = data;
    const uniqueId = uuidv4();
    console.log(uniqueId)
    setTodos([
      ...todos,
      {
        id: uniqueId,
        title: title,
        description: description,
        date: new Date().toDateString(),
      },
    ]);
    notifyPositive();
  };
  return (
    <>
      <h1>Add a new task</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Stack spacing={2} width={400}>
          <TextField
            label="Task definition"
            type="text"
            sx={{ width: 400, input: { color: "white" } }}
            {...register("title", {
              required: "You must provide a title",
            })}
            error={!!errors.title}
            helperText={errors.title?.message}
          />
          <TextField
            label="Task description"
            type="text"
            sx={{ width: 400, input: { color: "white" } }}
            {...register("description", {
              required: "You must provide a task description",
              maxLength: {
                value: 15,
                message: "You must have no more than 15 symbols",
              },
            })}
            error={!!errors.description}
            helperText={errors.description?.message}
          />
          <Button title="Create" variant="outlined" type="submit" />
        </Stack>
      </form>
    </>
  );
};

export default TaskForm;
