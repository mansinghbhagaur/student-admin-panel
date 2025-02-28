import { Box, IconButton, Toolbar, Typography } from "@mui/material";
import { Menu as MenuIcon, NightsStay, WbSunny } from "@mui/icons-material";
import MuiAppBar from "@mui/material/AppBar";

import React from "react";
import { styled } from "@mui/material/styles";
import { useThemeContext } from "../theme/ThemeContext";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Header = ({ open, setOpen }) => {
  const { mode, toggleTheme } = useThemeContext();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={[
            {
              mr: 2,
            },
            open && { display: "none" },
          ]}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Student Panel
        </Typography>

        {/* Theme Toggle Button */}
        <Box sx={{ flexGrow: 1 }} />
        <Box>
          <IconButton onClick={toggleTheme}>
            {mode === "light" ? <WbSunny /> : <NightsStay />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
