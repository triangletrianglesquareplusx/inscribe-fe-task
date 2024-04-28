import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notifyPositive = () => {
  toast.success("Task created!", {
    position: "bottom-left",
  });
};

const notifyNegative = () => {
  toast.warn("Task Deleted!", {
    position: "bottom-left",
  });
};

export { notifyPositive, notifyNegative };
