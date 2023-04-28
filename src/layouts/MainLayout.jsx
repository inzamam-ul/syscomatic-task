import { Box, Container, CssBaseline, Toolbar } from "@mui/material";
import Navbar from "../components/Navbar";
// react components.

// eslint-disable-next-line react/prop-types
const MainLayout = ({ children }) => {
  return (
    <Box>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="lg">
        <Toolbar />
        {children}
      </Container>
    </Box>
  );
};

export default MainLayout;
