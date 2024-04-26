import Button from "../button/Button";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import "./CommandPanel.css";

const CommandPanel = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false)
  return (
    <nav className="container">
      <p className="test">Inscribe - Todo List App</p>
      <Button
        title="Add New Note"
        variant="outlined"
        onClick={() => console.log("hey")}
      />
    </nav>
  );
};

export default CommandPanel;
