import { MainLayout } from "@/src/shared/Layouts/MainLayout";
import { Container, Stack, Typography } from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";
import LoginForm from "./components/LoginForm";

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
              mx={{ xs: 0, md: 8 }}
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
                width={{ xs: "100%", md: "50%" }}
              >
                <LoginForm />
              </Stack>
            </Stack>
          </Container>
        </MainLayout>
      </main>
    </>
  );
};

export default LoginPage;
