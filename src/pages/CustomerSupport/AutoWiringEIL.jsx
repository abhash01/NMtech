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

const AutoWiringEIL = () => {
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
            SPI (SMART PLANT INSTRUMENTATION) – AUTO WIRING DATA UPDATE WITH
            ILDS – EIL (ENGINEERS INDIA LIMITED) (GURGAON)
          </Typography>
        </Box>

        <Box
          p={4}
          sx={{ backgroundColor: "#f9f9f9", borderRadius: 2, boxShadow: 3 }}
        >
          <Typography variant="body1" gutterBottom>
            • Wiring information from DCS Vendor was available in Excel
            worksheet, this was directly imported by our team in SPI database to
            create the complete wiring
          </Typography>

          <List dense>
            <ListItem>
              <ListItemText primary="Our team designed the import utility" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Managed vendor data" />
            </ListItem>
          </List>

          <Typography variant="body1" mt={2}>
            • ILD (instrument Loop Wiring Diagram): Template were prepared, and
            loops were assigned templates based on loop configuration by using
            scripts
          </Typography>
          <Typography variant="body1" mt={2}>
            • ILD were created, checked and approved from vendor
          </Typography>
          <Typography variant="body1" mt={2}>
            • As-built information was managed (only for Loop wiring)
          </Typography>
          <Typography variant="body1" mt={2}>
            • Team: 1 – ADMIN, 2 - Engineers
          </Typography>
          <Typography variant="body1" mt={2}>
            • Project Duration: 6 Months, 3 engineers
          </Typography>
        </Box>
      </Container>

      <Footer />
    </>
  );
};

export default AutoWiringEIL;
