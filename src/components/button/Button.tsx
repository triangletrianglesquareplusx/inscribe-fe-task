import MuiButton from "@mui/material/Button";
import { SxProps } from "@mui/material";
import { ReactNode } from "react";

type ButtonProps = {
  title?: string;
  variant: "text" | "outlined" | "contained";
  onClick?: () => void;
  sx?: SxProps;
  type?: "submit" | "reset" | "button" | undefined;
  children?: ReactNode
};
const Button = ({ title, variant, onClick, sx, type, children }: ButtonProps) => {
  return (
    <MuiButton
      variant={variant}
      onClick={onClick}
      sx={{ ...sx, whiteSpace: "nowrap" }}
      type={type}
    >
      {title}{children}
    </MuiButton>
  );
};

export default Button;
