import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette:{
    mode: "light",
    primary:{
      main: "#9c27b0",
      light: "#ba68c8",
      dark: "#7b1fa2",
      contrastText:"#e9a7f5"
    },
    background: {
        paper: "#140414",
    }
  }
})