import { Box, Button, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";
import insuranceIcon from "assets/insurance.svg";
import Link from "next/link";

interface InsuranceButtonProps {
  title: string;
  active: boolean;
  href: string;
}

const InsuranceButton = (props: InsuranceButtonProps) => {
  const { title, active, href } = props;
  return (
    <Button
      disabled={!active}
      sx={[
        {
          width: "8rem",
          height: "8rem",
          border: "1px solid #e2e2e2",
          borderRadius: 4,
          textDecoration: "none",
        },
        !active && {
          bgcolor: '#fafafa'
        },
      ]}
    >
      <Stack alignItems="center" spacing={2} padding={2}>
        <Image alt={title} src={insuranceIcon.src} width={50} height={50} />
        <Box component={Link} href={href} sx={{ textDecoration: "none" , color: 'black'}}>
          {title}
        </Box>
      </Stack>
    </Button>
  );
};

export default InsuranceButton;
