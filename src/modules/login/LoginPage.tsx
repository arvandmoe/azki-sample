import { MainLayout } from "@/src/shared/Layouts/MainLayout";
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
        <MainLayout>LoginPage</MainLayout>
      </main>
    </>
  );
};

export default LoginPage;
