import { MainLayout } from "@/src/shared/Layouts/MainLayout";
import InsuranceButton from "@/src/shared/components/button/InsuranceButton";
import { ROUTES } from "@/src/shared/constants/routes";
import { Box, Container, Stack, Typography } from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";

const InsurancePage: NextPage = () => {
  return (
    <>
      <Head>
        <title> {"ازکی - انتخاب بیمه"}</title>
        <meta name="description" content={"ازکی -سامانه خرید بیمه"} />
      </Head>
      <main>
        <MainLayout>
          <Container>
            <Box
              paddingRight={{ xs: 0, sm: 16 }}
              paddingTop={{ xs: 10, sm: 12 }}
              width="100%"
            >
              <Typography
                variant="h1"
                fontWeight="bold"
                fontSize={{ xs: 20, sm: 28 }}
              >
                {"انتخاب بیمه"}
              </Typography>
              <Stack
                display="flex"
                direction="row"
                marginTop={{ xs: 2, sm: 4 }}
                spacing={2}
                width="100%"
              >
                <InsuranceButton title={"شخص ثالث"} active={true} href={ROUTES.THIRD_PARTY} />
                <InsuranceButton title={"بدنه"} active={false} href="/" />
              </Stack>
            </Box>
          </Container>
        </MainLayout>
      </main>
    </>
  );
};

export default InsurancePage;
