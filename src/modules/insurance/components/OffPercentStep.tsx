import StepButton from "@/src/shared/components/button/StepButton";
import AzkiService from "@/src/shared/services/azki-service";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { z } from "zod";
import DetailsDialog from "../dialogs/DetailsDialog";
import { backToPrevCompanyStep, savePercentStep } from "../store/insuranceSlice";

export interface OffPercentStepFormValues {
  thirdPercent: string;
  accidentPercent: string;
}

const schema = z.object({
  thirdPercent: z
    .string()
    .min(1, { message: "لطفا درصد تخفیف ثالث را انتخاب کنید" }),
  accidentPercent: z
    .string()
    .min(1, { message: "لطفا درصد تخفیف حوادث را انتخاب کنید" }),
});

const OffPercentStep = () => {
  const dispatch = useDispatch();

  const { data } = useQuery({
    queryKey: ["getThirdDiscounts"],
    queryFn: AzkiService.getThirdDiscounts,
  });

  const defaultValues = {
    thirdPercent: "",
    accidentPercent: "",
  };

  const {
    getValues,
    trigger,
    handleSubmit,
    formState: { errors, isValid },
    control,
  } = useForm<OffPercentStepFormValues>({
    defaultValues: defaultValues,
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<OffPercentStepFormValues> = (data) => {
    onNextClick();
  };

  const onPrevClick = () => {
    dispatch(backToPrevCompanyStep());
  };

  const onNextClick = () => {
    if (isValid) {
      dispatch(savePercentStep(getValues()));
    }
  };

  return (
    <div>
      <Typography
        variant="h1"
        fontWeight="bold"
        fontSize={{ xs: 14, sm: 20 }}
        color="#9e9e9e"
      >
        {"درصد تخفیف بیمه شخص ثالث و حوادث راننده را وارد کنید"}
      </Typography>
      <Box pt={4} />
      <Stack width={{ xs: "100%", md: "50%" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <Controller
                name="thirdPercent"
                control={control}
                render={({ field }) => (
                  <FormControl fullWidth>
                    <InputLabel id="thirdPercent-label">
                      {"درصد تخفیف ثالث"}
                    </InputLabel>
                    <Select
                      {...field}
                      labelId="thirdPercent-label"
                      error={!!errors.thirdPercent}
                    >
                      {data?.data &&
                        data?.data.map((item) => {
                          return (
                            <MenuItem key={item.id} value={item.title}>
                              {item.title}
                            </MenuItem>
                          );
                        })}
                    </Select>
                    {errors.thirdPercent && (
                      <Typography color="error" mt={1}>
                        {errors.thirdPercent
                          ? (errors.thirdPercent.message as string)
                          : ""}
                      </Typography>
                    )}
                  </FormControl>
                )}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Controller
                name="accidentPercent"
                control={control}
                render={({ field }) => (
                  <FormControl fullWidth>
                    <InputLabel id="accidentPercent-label">
                      {"درصد تخفیف حوادث"}
                    </InputLabel>
                    <Select
                      {...field}
                      labelId="accidentPercent-label"
                      error={!!errors.accidentPercent}
                    >
                      {data?.data &&
                        data?.data.map((item) => {
                          return (
                            <MenuItem key={item.id} value={item.title}>
                              {item.title}
                            </MenuItem>
                          );
                        })}
                    </Select>
                    {errors.accidentPercent && (
                      <Typography color="error" mt={1}>
                        {errors.accidentPercent
                          ? (errors.accidentPercent.message as string)
                          : ""}
                      </Typography>
                    )}
                  </FormControl>
                )}
              />
            </Grid>
          </Grid>
          <Stack direction="row" justifyContent="space-between" pt={4}>
            <StepButton type="prev" onClick={onPrevClick} />
            <DetailsDialog canOpen={isValid} trigger={trigger} />
          </Stack>
        </form>
      </Stack>
    </div>
  );
};

export default OffPercentStep;
