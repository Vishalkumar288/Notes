import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { primaryBackground } from "../theme/GlobalTheme";

const Header = () => {

  return (
    <AppBar
      position="relative"
      sx={{
        background: primaryBackground,
        zIndex: 1,
      }}
    >
      <Toolbar component={Container}>
        <Box
          sx={{
            justifyContent: "center",
            display: "flex",
            flexGrow: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: "46px",
            }}
          >
            {`Weekend Notes`}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
