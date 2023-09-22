import { Button } from "@mui/material";
import React from "react";

interface ContainedButtonProps {
  title: string;
  type: "submit" | "button";
  onClick?: () => void;
}

const ContainedButton = (props: ContainedButtonProps) => {
  const { title, type = "button", onClick } = props;
  return (
    <Button
      variant="contained"
      type={type}
      onClick={onClick}
      sx={{ borderRadius: 6, color: "white", px: 5, py: 1 }}
    >
      {title}
    </Button>
  );
};

export default ContainedButton;
