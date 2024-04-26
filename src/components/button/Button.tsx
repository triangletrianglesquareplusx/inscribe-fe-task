import MuiButton from "@mui/material/Button";

type ButtonProps = {
  title: string;
  variant: "text" | "outlined" | "contained";
  onClick: () => void;
};
const Button = ({ title, variant, onClick }: ButtonProps) => {
  return (
    <MuiButton variant={variant} onClick={onClick} sx={{whiteSpace: "nowrap"}}>
      {title}
    </MuiButton>
  );
};

export default Button;
