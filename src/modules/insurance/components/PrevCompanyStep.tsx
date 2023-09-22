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
import {
  backToChooseCarStep,
  goToOffPercentStep
} from "../store/insuranceSlice";

export interface PrevCompanyStepFormValues {
  prevCompany: string;
}

const schema = z.object({
  prevCompany: z
    .string()
    .min(1, { message: "لطفا شرکت بیمه گر قبلی را انتخاب کنید" }),
});

const PrevCompanyStep = () => {
  const dispatch = useDispatch();

  const { data } = useQuery({
    queryKey: ["getInsureCompanies"],
    queryFn: AzkiService.getInsureCompanies,
  });

  const defaultValues = {
    prevCompany: "",
  };

  const {
    getValues,
    handleSubmit,
    formState: { errors, isValid },
    control,
  } = useForm<PrevCompanyStepFormValues>({
    defaultValues: defaultValues,
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<PrevCompanyStepFormValues> = (data) => {
    onNextClick();
  };

  const onPrevClick = () => {
    dispatch(backToChooseCarStep());
  };

  const onNextClick = () => {
    if (isValid) {
      dispatch(goToOffPercentStep(getValues()));
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
        {"شرکت بیمه گر قبلی خود را در این بخش وارد کنید"}
      </Typography>
      <Box pt={4} />
      <Stack width={{ xs: "100%", md: "50%" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <Controller
                name="prevCompany"
                control={control}
                render={({ field }) => (
                  <FormControl fullWidth>
                    <InputLabel id="prevCompany-label">
                      {"شرکت بیمه گر قبلی"}
                    </InputLabel>
                    <Select
                      {...field}
                      labelId="prevCompany-label"
                      error={!!errors.prevCompany}
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
                    {errors.prevCompany && (
                      <Typography color="error" mt={1}>
                        {errors.prevCompany
                          ? (errors.prevCompany.message as string)
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
            <StepButton type="next" />
          </Stack>
        </form>
      </Stack>
    </div>
  );
};

export default PrevCompanyStep;
