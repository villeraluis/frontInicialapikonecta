import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import MenuButton from "./components/MenuButton";
import IndexProductos from "./components/IndexProductos";
import IndexVentas from "./components/IndexVentas";
import { Container } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

const color1 = "#00254f";

const lightTheme = createTheme({
  palette: {
    type: "light",
    primary: {
      light: "#00254f",
      main: color1,
      dark: "#00254f",
    },
  },
});



export default function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      

      

      <Container component="main" maxWidth="sm" sx={{ p: { xs: 1, md: 3 } }}>
        <Routes>
          
          <Route path="/productos/*" element={<IndexProductos />} />
          <Route path="/ventas/*" element={<IndexVentas />} />
        </Routes>
      </Container>
      <MenuButton></MenuButton>
    </ThemeProvider>
  );
}
