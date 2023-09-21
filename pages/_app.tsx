import MuiThemeProvider from "@/src/common/mui/MuiThemeProvider";
import queryClient from "@/src/common/network/query-client";
import "@/styles/globals.css";
import { QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";

import localFont from "next/font/local";

const iranSans = localFont({ src: "../assets/IRANSansXRegular.ttf",  variable: '--font-iranSans', });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={iranSans.className}>
      <QueryClientProvider client={queryClient}>
        <MuiThemeProvider>
          <Component {...pageProps} />
        </MuiThemeProvider>
      </QueryClientProvider>
    </div>
  );
}
