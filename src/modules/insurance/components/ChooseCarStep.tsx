import React from "react";
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
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import StepButton from "@/src/shared/components/button/StepButton";
import { useQuery } from "@tanstack/react-query";
import AzkiService from "@/src/shared/services/azki-service";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/src/shared/redux/store";
import { useRouter } from "next/router";
import { ROUTES } from "@/src/shared/constants/routes";
import { goToPrevCompanyStep } from "../store/insuranceSlice";

export interface ChooseCarStepFormValues {
  carType: string;
  carModel: string;
}

const schema = z.object({
  carType: z.string().min(1, { message: "لطفا نوع خودرو را انتخاب کنید" }),
  carModel: z.string().min(1, { message: "لطفا مدل خودرو را انتخاب کنید" }),
});

const ChooseCarStep = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const insuranceState = useSelector((state: RootState) => state.insurance);

  const { data } = useQuery({
    queryKey: ["getVehicleTypes"],
    queryFn: AzkiService.getVehicleTypes,
  });

  const defaultValues = {
    carType: "",
    carModel: "",
  };

  const {
    getValues,
    watch,
    handleSubmit,
    formState: { errors, isValid },
    control,
  } = useForm<ChooseCarStepFormValues>({
    defaultValues: defaultValues,
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<ChooseCarStepFormValues> = (data) => {
    onNextClick()
  };

  const onBackClick = () => {
    router.replace(ROUTES.INSURANCE);
  };

  const onNextClick = () => {
    if (isValid) {
      dispatch(goToPrevCompanyStep(getValues()));
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
        {"نوع و مدل خودروی خود را انتخاب کنید"}
      </Typography>
      <Box pt={4} />
      <Stack width={{ xs: "100%", md: "50%" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Controller
                name="carType"
                control={control}
                render={({ field }) => (
                  <FormControl fullWidth>
                    <InputLabel id="carType-label">{"نوع خودرو"}</InputLabel>
                    <Select
                      {...field}
                      labelId="carType-label"
                      error={!!errors.carType}
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
                    {errors.carType && (
                      <Typography color="error" mt={1}>
                        {errors.carType
                          ? (errors.carType.message as string)
                          : ""}
                      </Typography>
                    )}
                  </FormControl>
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name="carModel"
                control={control}
                render={({ field }) => (
                  <FormControl fullWidth>
                    <InputLabel id="carModel-label">{"مدل خودرو"}</InputLabel>
                    <Select
                      {...field}
                      labelId="carModel-label"
                      id="carModel"
                      error={!!errors.carModel}
                    >
                      {data?.data &&
                        watch("carType") != "" &&
                        data?.data
                          ?.find((type) => type.title === watch("carType"))
                          ?.usages?.map((item) => {
                            return (
                              <MenuItem key={item.id} value={item.title}>
                                {item.title}
                              </MenuItem>
                            );
                          })}
                    </Select>
                    {errors.carModel && (
                      <Typography color="error" mt={1}>
                        {errors.carModel
                          ? (errors.carModel.message as string)
                          : ""}
                      </Typography>
                    )}
                  </FormControl>
                )}
              />
            </Grid>
          </Grid>
          <Stack direction="row" justifyContent="space-between" pt={4}>
            <StepButton type="back" onClick={onBackClick} />
            <StepButton type="next" />
          </Stack>
        </form>
      </Stack>
    </div>
  );
};

export default ChooseCarStep;
