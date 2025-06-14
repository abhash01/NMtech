import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Container,
  useMediaQuery,
} from "@mui/material";
import TopNav from "../../components/Navbar/TopNav/TopNav";
import SubNav from "../../components/Navbar/SubNav/SubNav";
import Footer from "../Footer/Footer";

const JSWVijayanagar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobileView = useMediaQuery("(max-width: 991px)");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getScrolledHeight = () => {
    return isMobileView ? "75px" : isScrolled ? "78px" : "150px";
  };
  return (
    <>
      <Container
        maxWidth
        disableGutters
        style={{
          backgroundColor: "var(--color-primary)",
          position: "sticky",
          top: 0,
          zIndex: 9999,
        }}
      >
        <TopNav isMenuVisible={isMobileView} />
      </Container>

      <Container
        maxWidth
        disableGutters
        sx={{
          position: "sticky",
          top: `${getScrolledHeight()}`,
          zIndex: 999,
          background: "var(--color-primary-light)",
        }}
      >
        <SubNav scrolledHeight={getScrolledHeight()} />
      </Container>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box textAlign="center" mb={6}>
          <Typography variant="h6" component="h1" gutterBottom>
            JSW STEEL (VIJAYANAGER AND DOLVI) – DIGITIAL TWIN IN COMOS
          </Typography>
        </Box>

        <Box
          p={4}
          sx={{ backgroundColor: "#f9f9f9", borderRadius: 2, boxShadow: 3 }}
        >
          <Typography variant="body1" gutterBottom>
            • Digital Twin RFP won by our company in competition with OEMs like:
            AVEVA and HEXAGON and SI companies like: TCE
          </Typography>
          <Typography variant="body1" gutterBottom>
            • Complete digitization of expansion units of steel plant at
            Vijayanagar for following:
          </Typography>

          <List dense>
            <ListItem>
              <ListItemText primary="Blast Furnace 5" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Hot Strip Mill 3" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Steel Melt shop 4" />
            </ListItem>
            <ListItem>
              <ListItemText primary="LCP5" />
            </ListItem>
            <ListItem>
              <ListItemText primary="RMHS5" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Utilities" />
            </ListItem>
          </List>
          <Typography variant="body1" gutterBottom>
            • Following documents digitized in COMOS:
          </Typography>

          <List dense>
            <ListItem>
              <ListItemText primary="PFDs: 80" />
            </ListItem>
            <ListItem>
              <ListItemText primary="P&IDs: 406" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Hydraulic Schematics: 380" />
            </ListItem>
            <ListItem>
              <ListItemText primary="SLDs: 480" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Circuit Diagrams: 51596" />
            </ListItem>
          </List>

          <Typography variant="body1" mt={2}>
            • Associated entire documents like: GA’s, Manual, Specifications,
            Datasheets, Isometrics and such to all assets of Equipment,
            Pipelines, Instruments, Electrical Items in COMOS
          </Typography>
          <Typography variant="body1" mt={2}>
            • Project is still on-going with activity of Laser scanning,
            Intelligent 3D modelling and linking the model with COMOS Assets
          </Typography>
          <Typography variant="body1" mt={2}>
            • Team Size: 24 Engineers
          </Typography>
        </Box>
      </Container>

      <Footer />
    </>
  );
};

export default JSWVijayanagar;
