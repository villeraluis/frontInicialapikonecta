import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ArchiveIcon from "@mui/icons-material/Archive";
import Paper from "@mui/material/Paper";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Link } from "react-router-dom";

export default function BotonesNavegacionFoot() {
  const ref = React.useRef(null);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />

      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          style={{
            //#3f51b5
            backgroundColor: "#00254f",
            color: "#fff",
          }}
        >
          

          { <BottomNavigationAction
            component={Link}
            to="/productos"
            label="Productos"
            style={{ color: "#fff" }}
            icon={<ArchiveIcon />}
            value={"ventas"}
          />}

         {/*  <BottomNavigationAction
            component={Link}
            to="/ventas"
            label="Ventas"
            style={{ color: "#fff" }}
            icon={<ShoppingCartCheckoutIcon />}
            value={"ventas"}
          /> */}
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
