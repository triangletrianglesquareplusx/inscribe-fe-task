import Button from "../button/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { FormControl } from "@mui/base/FormControl";
import { useState } from "react";
import "./CommandPanel.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  border: "1px solid gray",
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

const CommandPanel = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  return (
    <nav className="container">
      <p className="test">Inscribe - Todo List App</p>
      <Button title="Add New Note" variant="outlined" onClick={handleOpen} />
      <Modal open={openModal} onClose={handleClose}>
        <Box sx={style}>
          <FormControl>
            <input />
          </FormControl>
        </Box>
      </Modal>
    </nav>
  );
};

export default CommandPanel;
