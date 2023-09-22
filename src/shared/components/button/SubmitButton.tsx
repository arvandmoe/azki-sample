import { Button } from "@mui/material";
import React from "react";

interface SubmitButtonProps {
  title: string;
}

const SubmitButton = (props: SubmitButtonProps) => {
  const { title } = props;
  return (
    <Button variant="contained" type="submit" sx={{ borderRadius: 6, color: 'white', px: 5, py: 1}}>
      {title}
    </Button>
  );
};

export default SubmitButton;
