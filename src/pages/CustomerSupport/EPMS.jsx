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

const EMPS = () => {
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
            EVALUATING PREDICTIVE MAINTENANCE SOLUTIONS FOR OIL AND GAS COMPANY
          </Typography>
        </Box>

        <Box
          p={4}
          sx={{ backgroundColor: "#f9f9f9", borderRadius: 2, boxShadow: 3 }}
        >
          <Typography variant="body1" gutterBottom>
            • Requirement:
          </Typography>

          <List dense>
            <ListItem>
              <ListItemText primary="Customer wanted to reduce the downtime on Compressors and Pumps being aged to more than 10 years in operations" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Predictive maintenance with RBA, RCM and basis of FMEA analysis" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Integration with OT systems of Bentley Nevada for real time data" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Only past maintenance history and Bentley Nevada’s vibration monitoring data available" />
            </ListItem>
          </List>
          <Typography variant="body1" gutterBottom>
            • Our experts evaluated many solutions including Uptime AI, Prism,
            MADe, Senseye and SiePA
          </Typography>

          <Typography variant="body1" mt={2}>
            • Prepared a detailed comparison report with analysis on the
            available AI models for different types of compressors and pumps
          </Typography>
          <Typography variant="body1" mt={2}>
            • Study conducted within 3 months by 2 process experts, 1 rotary
            experts and 2 AI experts
          </Typography>
          <Typography variant="body1" mt={2}>
            • Customer is now preparing an exhaustive tender specification for
            their requirement
          </Typography>
        </Box>
      </Container>

      <Footer />
    </>
  );
};

export default EMPS;
