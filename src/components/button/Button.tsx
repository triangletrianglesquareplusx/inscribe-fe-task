import MuiButton from "@mui/material/Button";
import { SxProps } from "@mui/material";

type ButtonProps = {
  title: string;
  variant: "text" | "outlined" | "contained";
  onClick?: () => void;
  sx?: SxProps;
  type?: "submit" | "reset" | "button" | undefined;
};
const Button = ({ title, variant, onClick, sx, type }: ButtonProps) => {
  return (
    <MuiButton
      variant={variant}
      onClick={onClick}
      sx={{ ...sx, whiteSpace: "nowrap" }}
      type={type}
    >
      {title}
    </MuiButton>
  );
};

export default Button;
