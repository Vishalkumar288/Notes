import { createTheme } from "@mui/material";
import "@fontsource/lovers-quarrel";

export const primaryBackground = "#F9F9E0";

export const globalTheme = createTheme({
  palette: {
    primary: {
      main: "#FF90BC",
      dark: "#FFC0D9",
      light: "#F9F9E0",
    },
    background: {
      default: '#E0C9A6', 
    },
  },
  typography: {
    fontFamily: ["Lovers Quarrel"],
    fontWeightRegular: 400,
    fontSize: 24,
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...((ownerState.variant === "outlined" ||
            ownerState.variant === "text") && {
            "&:hover": {
              background: primaryBackground,
            },
          }),
          textTransform: "capitalize",
          borderRadius: "8px",
          height: "100%",
          fontSize: 15,
          lineHeight: "20px",
          letterSpacing: "0.02em",
        }),
      },
      variants: [
        {
          props: { variant: "soft" },
          style: ({ theme }) => {
            return {
              color: theme.palette.primary.main,
              backgroundColor: primaryBackground,
              "&:hover": {
                backgroundColor: theme.palette.primary.main,
                color: "white",
              },
            };
          },
        },
        {
          props: { variant: "link" },
          style: ({ theme }) => {
            return {
              color: "white",
              backgroundColor: theme.palette.primary.main,
              padding: 0,
              height: "auto",
              fontSize: 14,
              fontWeight: 500,
              "&:hover": {
                backgroundColor: theme.palette.primary.main,
                color: "white",
              },
            };
          },
        },
      ],
    }
  },
});
