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

const ToyotaMumbai = () => {
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
            TOYO ENGINEERING – MUMBAI
          </Typography>
        </Box>

        <Box
          p={4}
          sx={{ backgroundColor: "#f9f9f9", borderRadius: 2, boxShadow: 3 }}
        >
          <Typography variant="body1" gutterBottom>
            • COMOS customization for TOYO’s Engineering work, work included:
          </Typography>

          <List dense>
            <ListItem>
              <ListItemText primary="P&ID intelligent Symbols" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Datasheets" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Reports and Queries" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Special design documents like:" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Interface with AVEVA E3D" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Custom engineering reports for interface with procurement tool (SAP)" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Training" />
            </ListItem>
          </List>

          <Typography variant="body1" mt={2}>
            • Project Duration: 6 Months, 3 engineers
          </Typography>
        </Box>
      </Container>

      <Footer />
    </>
  );
};

export default ToyotaMumbai;
