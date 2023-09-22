import { MainLayout } from "@/src/shared/Layouts/MainLayout";
import InsuranceButton from "@/src/shared/components/button/InsuranceButton";
import { ROUTES } from "@/src/shared/constants/routes";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";
import ChooseCarStep from "./components/ChooseCarStep";
import { useSelector } from "react-redux";
import { RootState } from "@/src/shared/redux/store";
import PrevCompanyStep from "./components/PrevCompanyStep";
import OffPercentStep from "./components/OffPercentStep";

const ThirdPartyPage: NextPage = () => {
  const insuranceState = useSelector((state: RootState) => state.insurance);

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
              mx={{ xs: 0, md: 8 }}
              paddingTop={{ xs: 10, sm: 12 }}
              width="100%"
            >
              <Typography
                variant="h1"
                fontWeight="bold"
                fontSize={{ xs: 20, sm: 28 }}
              >
                {"بیمه شخص ثالث"}
              </Typography>
              <Box pt={4}/>
              {insuranceState.step === 'ChooseCarStep' ? <ChooseCarStep />: null}
              {insuranceState.step === 'PrevCompanyStep' ? <PrevCompanyStep />: null}
              {insuranceState.step === 'OffPercentStep' ? <OffPercentStep />: null}
              <Stack
                display="flex"
                direction="row"
                marginTop={{ xs: 2, sm: 4 }}
                spacing={2}
                width="100%"
              ></Stack>
            </Box>
          </Container>
        </MainLayout>
      </main>
    </>
  );
};

export default ThirdPartyPage;
