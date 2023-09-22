import MuiThemeProvider from "@/src/common/mui/MuiThemeProvider";
import { RTLProvider } from "@/src/common/mui/RTLProvider";
import queryClient from "@/src/common/network/query-client";
import { store } from "@/src/shared/redux/store";
import "@/styles/globals.css";
import { QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { Provider } from 'react-redux'

import localFont from "next/font/local";

const iranSans = localFont({
  src: "../assets/IRANSansXRegular.ttf",
  variable: "--font-iranSans",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={iranSans.className}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <RTLProvider>
            <MuiThemeProvider>
              <Component {...pageProps} />
            </MuiThemeProvider>
          </RTLProvider>
        </QueryClientProvider>
      </Provider>
    </div>
  );
}
