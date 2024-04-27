import MuiButton from "@mui/material/Button";
import { SxProps } from "@mui/material";

type ButtonProps = {
  title: string;
  variant: "text" | "outlined" | "contained";
  onClick?: () => void;
  sx?: SxProps;
};
const Button = ({ title, variant, onClick, sx }: ButtonProps) => {
  return (
    <MuiButton
      variant={variant}
      onClick={onClick}
      sx={{ ...sx, whiteSpace: "nowrap" }}
    >
      {title}
    </MuiButton>
  );
};

export default Button;
