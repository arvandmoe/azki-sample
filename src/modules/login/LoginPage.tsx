import { MainLayout } from "@/src/shared/Layouts/MainLayout";
import InsuranceButton from "@/src/shared/components/button/InsuranceButton";
import Input from "@/src/shared/components/input/Input";
import { Container, Box, Typography, Stack } from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";

const LoginPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>ورود - ازکی</title>
        <meta name="description" content="Azki Sample" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MainLayout>
          <Container>
            <Stack
              display="flex"
              alignItems={{ xs: "center", sm: "start" }}
              paddingLeft={{ xs: 0, sm: 8 }}
              paddingTop={{ xs: 10, sm: 12 }}
              width="100%"
            >
              <Typography
                variant="h1"
                fontWeight="bold"
                fontSize={{ xs: 20, sm: 28 }}
              >
                {"ثبت نام"}
              </Typography>
              <Stack
                display="flex"
                direction="row"
                marginTop={{ xs: 2, sm: 4 }}
                width="100%"
              ></Stack>
              <Stack width={{ xs: "100%", md: "50%" }} spacing={2}>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <Input id="name" label={"نام"} />
                  <Input id="name" label={"نام خانوادگی"} />
                </Stack>
                <Input id="name" label={"شماره موبایل"} />
                <Input id="name" label={"رمز عبور"} />
              </Stack>
            </Stack>
          </Container>
        </MainLayout>
      </main>
    </>
  );
};

export default LoginPage;
