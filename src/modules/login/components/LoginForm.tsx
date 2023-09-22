import SubmitButton from "@/src/shared/components/button/SubmitButton";
import { loginSchema } from "@/src/shared/validations/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Grid, Stack, TextField } from "@mui/material";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

interface LoginFormData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const defaultValues = {
    firstName: "",
  };

  const form = useForm<LoginFormData>({
    defaultValues,
    resolver: zodResolver(loginSchema),
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = form;

  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2} mt={{ xs: 2, sm: 2 }}>
        <Grid item xs={12} sm={6}>
          <Controller
            name="firstName"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label={"نام"}
                variant="outlined"
                error={!!errors.firstName}
                helperText={errors.firstName ? errors.firstName.message : ""}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="lastName"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label={"نام خانوادگی"}
                variant="outlined"
                error={!!errors.lastName}
                helperText={errors.lastName ? errors.lastName.message : ""}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="phoneNumber"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label={"شماره موبایل"}
                variant="outlined"
                error={!!errors.phoneNumber}
                helperText={
                  errors.phoneNumber ? errors.phoneNumber.message : ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                type="password"
                label={"رمز عبور"}
                variant="outlined"
                error={!!errors.password}
                helperText={errors.password ? errors.password.message : ""}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} justifyContent="end">
          <Stack
            direction="row"
            marginTop={2}
            justifyContent={{ xs: "center", sm: "end" }}
            width="100%"
          >
            <SubmitButton title={"ثبت نام"} />
          </Stack>
        </Grid>
      </Grid>
    </form>
  );
};

export default LoginForm;
