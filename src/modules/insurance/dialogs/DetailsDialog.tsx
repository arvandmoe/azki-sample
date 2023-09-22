import ContainedButton from "@/src/shared/components/button/ContainedButton";
import { RootState } from "@/src/shared/redux/store";
import { Box, Divider, Stack, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import * as React from "react";
import { useSelector } from "react-redux";

export interface SimpleDialogProps {
  open: boolean;
  onClose: () => void;
}

interface DetailItem {
  title: string;
  value: string;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, open } = props;
  const insuranceState = useSelector((state: RootState) => state.insurance);

  const handleClose = () => {
    onClose()
  };

  const details: DetailItem[] = [
    { title: "نوع خودرو", value: insuranceState.chooseCarStepData?.carType! },
    { title: "مدل خودرو", value: insuranceState.chooseCarStepData?.carModel! },
    {
      title: "شرکت بیمه گر قبلی",
      value: insuranceState.prevCompanyStepData?.prevCompany!,
    },
    {
      title: "درصد تخفیف ثالث",
      value: insuranceState.offPercentStepData?.thirdPercent!,
    },
    {
      title: "درصد تخفیف حوادث",
      value: insuranceState.offPercentStepData?.accidentPercent!,
    },
  ];

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle alignSelf='center'>{"خلاصه اطلاعات"}</DialogTitle>
      <Box p={2}>
        {details.map((detail, index) => (
          <Box key={index} py={1} px={2}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={24}
            >
              <Typography variant="subtitle1">{detail.title}</Typography>
              <Typography variant="body1">{detail.value}</Typography>
            </Stack>
            <Divider />
          </Box>
        ))}
      </Box>
    </Dialog>
  );
}

interface DetailsDialogProps {
  canOpen: boolean;
  trigger: () => void;
}

export default function DetailsDialog(props: DetailsDialogProps) {
  const { canOpen, trigger } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    trigger();
    canOpen && setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ContainedButton
        type="submit"
        title={"استعلام قیمت"}
        onClick={handleClickOpen}
      />
      <SimpleDialog open={open} onClose={handleClose} />
    </div>
  );
}
