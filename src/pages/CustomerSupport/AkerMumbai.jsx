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

const AkerMumbai = () => {
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
            SPI (SMART PLANT INSTRUMENTATION) PROJECT SUPPORT – AKER SOLUTIONS –
            MUMBAI
          </Typography>
        </Box>

        <Box
          p={4}
          sx={{ backgroundColor: "#f9f9f9", borderRadius: 2, boxShadow: 3 }}
        >
          <Typography variant="body1" gutterBottom>
            • ADMIN support
          </Typography>

          <List dense>
            <ListItem>
              <ListItemText primary="Engineers working on site (Norway - Oslo) for following activities:" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Instrument Loop Creation (Using imports), checking and QC" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Instrument Specification Sheet fill-up (Data from various sources, even vendor information)" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Instrument Loop Drawings – Wiring, Creating ILD reports" />
            </ListItem>
            <ListItem>
              <ListItemText primary="JB Schedule" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Cabinets / Panels – wiring update" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Cable Schedule" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Instrument Hook-up" />
            </ListItem>
          </List>
          <Typography variant="body1" gutterBottom>
            • Project Duration: 8 Months
          </Typography>

          <Typography variant="body1" mt={2}>
            • Team Size: 1 Project Manager, 1-SPI ADMIN, 4-Experienced Engineers
          </Typography>
        </Box>
      </Container>

      <Footer />
    </>
  );
};

export default AkerMumbai;
