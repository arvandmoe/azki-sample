import React, { ReactNode } from "react";
import { orange } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const theme = createTheme({
  status: {
    danger: orange[500],
  },

  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: "1440px",
        },
        maxWidthMd: {
          maxWidth: 320,
        },
        maxWidthLg: {
          maxWidth: "1440px!important",
        },
      },
    },
  },
  typography: {
    fontFamily: [
      'var(--font-iranSans)'
    ].join(','),
    h1: {
      fontSize: "18px",
    },
  },
});

interface MuiThemeProviderProps {
  children: ReactNode;
}

export default function MuiThemeProvider({ children }: MuiThemeProviderProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
