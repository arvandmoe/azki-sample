import { Box, Button } from "@mui/material";
import React from "react";
import Arrow from "assets/arrow.svg";
import ArrowReversed from "assets/arrow-reversed.png";
import Image from "next/image";

interface StepButtonProps {
  type: "back" | "prev" | "next";
  onClick?: () => void;
}

const StepButton = (props: StepButtonProps) => {
  const { type, onClick } = props;
  const isNext = type === "next";
  return (
    <Button
      variant="outlined"
      type={isNext ? "submit" : "button"}
      onClick={onClick}
      endIcon={
        isNext ? <Image src={Arrow.src} alt="" width={12} height={12} /> : null
      }
      startIcon={
        !isNext ? (
          <Image src={ArrowReversed.src} alt="" width={12} height={12} />
        ) : null
      }
      sx={{
        borderRadius: 6,
        border: "2px solid #25b79b",
        color: "#25b79b",
        px: 5,
        py: 1,
      }}
    >
      {isNext ? "مرحله بعد" : null}
      {type === "prev" ? "مرحله قبل" : null}
      {type === "back" ? "بازگشت" : null}
    </Button>
  );
};

export default StepButton;
