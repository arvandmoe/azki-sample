import { TextField } from "@mui/material";
import React from "react";

interface InputProps {
  id: string;
  label: string;
}

const Input = (props: InputProps) => {
  const { id, label } = props;
  return <TextField id={id} label={label} variant="outlined" fullWidth />;
};

export default Input;
