import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import insuranceIcon from "assets/insurance.svg";
import insuranceIconInactive from "assets/insurance-inactive.svg";
import Link from "next/link";

interface InsuranceButtonProps {
  title: string;
  active: boolean;
  href: string;
}

const InsuranceButton = (props: InsuranceButtonProps) => {
  const { title, active, href } = props;
  return (
    <Box component={Link} href={href}>
      <Button
        disabled={!active}
        sx={[
          {
            position: "relative",
            width: "8rem",
            height: "8rem",
            border: "1px solid #e2e2e2",
            borderRadius: 4,
            textDecoration: "none",
          },
          !active && {
            bgcolor: "#fafafa",
          },
        ]}
      >
        <Stack alignItems="center" spacing={2} padding={2}>
          <Image
            alt={title}
            src={active ? insuranceIcon : insuranceIconInactive.src}
            width={50}
            height={50}
          />
          <Box
            component="span"
            sx={{ textDecoration: "none", color: active ? "black" : "#d6d6d6" }}
          >
            {title}
          </Box>
        </Stack>
      </Button>
    </Box>
  );
};

export default InsuranceButton;
