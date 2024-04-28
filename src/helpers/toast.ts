import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notifyPositive = () => {
  toast.success("Task created!", {
    position: "bottom-left",
  });
};

export default notifyPositive;
