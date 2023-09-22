import ContainedButton from "@/src/shared/components/button/ContainedButton";
import { ROUTES } from "@/src/shared/constants/routes";
import { login } from "@/src/shared/redux/slices/userSlice";
import { LoginFormData } from "@/src/shared/types/User";
import { loginSchema } from "@/src/shared/validations/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Grid, Stack, TextField } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const defaultValues = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    password: "",
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
    dispatch(login(form.getValues()));
    router.replace(ROUTES.INSURANCE);
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
            <ContainedButton type="submit" title={"ثبت نام"} />
          </Stack>
        </Grid>
      </Grid>
    </form>
  );
};

export default LoginForm;
