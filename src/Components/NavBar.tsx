import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import "./NavBar.css";
import Logo from "../logo.svg";
import { useLocation } from "react-router-dom";

type Page = {
  name: string;
  path: string;
};

const pages: Page[] = [
  { name: "Úvod", path: "/" },
  { name: "Príprava", path: "/definitions" },
  { name: "Testovanie", path: "/testing" },
  { name: "FAQ", path: "/faq" },
];

export const NavBar = () => {
  const location = useLocation();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="absolute" sx={{ backgroundColor: "transparent" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img className="navbar-logo" src={Logo} alt="logo" />

          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "flex",
                md: "none",
              },
              justifyContent: "end",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => {
                const selected = location.pathname === page.path;

                return (
                  <MenuItem
                    key={page.path}
                    selected={selected}
                    onClick={handleCloseNavMenu}
                    sx={{
                      color: selected ? "#FF6000" : "#ffffff",
                      "&:hover": {
                        color: "#FF6000",
                      },
                    }}
                    href={page.path}
                  >
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page) => {
              const selected = location.pathname === page.path;

              return (
                <Button
                  key={page.path}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: selected ? "#FF6000" : "#ffffff",
                    display: "block",
                    "&:hover": {
                      color: "#FF6000",
                    },
                  }}
                  href={page.path}
                >
                  {page.name}
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
