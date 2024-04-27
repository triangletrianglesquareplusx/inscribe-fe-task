import Button from "../button/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TaskForm from "../taskform/TaskForm";
import SingleNote from "../../data/single-note";
import { useState, Dispatch, SetStateAction } from "react";
import "./CommandPanel.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  border: "1px solid gray",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

type CommandPanelProps = {
  handleTodos: Dispatch<SetStateAction<SingleNote[]>>;
};

const CommandPanel = ({ handleTodos }: CommandPanelProps) => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  return (
    <nav className="container">
      <p className="test">Inscribe - Todo App</p>
      <Button title="Add New Note" variant="outlined" onClick={handleOpen} />
      <Modal open={openModal} onClose={handleClose}>
        <Box sx={style}>
          <TaskForm />
        </Box>
      </Modal>
    </nav>
  );
};

export default CommandPanel;
