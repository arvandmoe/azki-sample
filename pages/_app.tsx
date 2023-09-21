import MuiThemeProvider from "@/src/common/mui/MuiThemeProvider";
import queryClient from "@/src/common/network/query-client";
import "@/styles/globals.css";
import { QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <MuiThemeProvider>
        <Component {...pageProps} />
      </MuiThemeProvider>
    </QueryClientProvider>
  );
}
