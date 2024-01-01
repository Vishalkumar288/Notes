import "./App.css";
import Header from "./shared/layouts/Header";
import { Routes } from "react-router-dom";
import { routes } from "./shared/navigation/routes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { globalTheme } from "./shared/theme/GlobalTheme";

function App() {
  return (
    <>
      <ThemeProvider theme={globalTheme}>
        <CssBaseline />
        <Header />
        <Routes>{routes}</Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
