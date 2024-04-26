import MuiButton from '@mui/material/Button';

type ButtonProps = {
    title: string
    variant: 'text'|'outlined'|'contained'
}
const Button = ({title, variant}:ButtonProps) => {
  return (
    <MuiButton variant={variant}>{title}</MuiButton>
  )
}

export default Button