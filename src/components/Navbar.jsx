import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const drawerWidth = 240;
const navItems = ["Home", "About", "Services", "Portfolio", "Contact"];

function DrawerAppBar(props) {
  const { pathname } = useLocation();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "left" }}>
      <Box
        sx={{
          background: "#1976d2",
          p: 2,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <img
          style={{ height: 17 }}
          src={logo}
          srcSet={logo}
          alt="Logo"
          loading="lazy"
        />
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Link style={{ textDecoration: "none" }} key={item} to={`/${item}`}>
            <ListItem
              disablePadding
              sx={{ background: pathname === `/${item}` ? "#8080802e" : "" }}
            >
              <ListItemButton sx={{ textAlign: "left", color: "black" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar component="nav">
        <Container maxWidth="xl">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <img
                style={{ height: 22 }}
                src={logo}
                srcSet={logo}
                alt="Logo"
                loading="lazy"
              />
            </Typography>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon sx={{ fontSize: "30px" }} />
            </IconButton>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item, i) => (
                <Link key={i} to={`/${item}`}>
                  <Button
                    key={item}
                    variant="outlined"
                    sx={{
                      fontSize: 16,
                      fontWeight: pathname === `/${item}` ? "bold" : "",
                      color: pathname === `/${item}` ? "#000000bd`" : "#fff",
                      "&:hover": {
                        borderColor: "#fff",
                        color: "#fff",
                      },
                    }}
                  >
                    {item}
                  </Button>
                </Link>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
