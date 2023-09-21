import { MainLayout } from "@/src/shared/Layouts/MainLayout";
import { Box } from "@mui/material";
import { NextPage } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

const LoginPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>ورود - ازکی</title>
        <meta name="description" content="Azki Sample" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`$${inter.className}`}>
        <MainLayout>LoginPage</MainLayout>
      </main>
    </>
  );
};

export default LoginPage;
