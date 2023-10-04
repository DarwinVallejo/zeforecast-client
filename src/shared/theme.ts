import { createTheme } from "@mui/material/styles";

export const themeOptions = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#231f20",
      "100": "red",
    },
    secondary: {
      main: "#f50057",
    },
  },
});
