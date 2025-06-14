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

const EDMS = () => {
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
            EDMS (ENGINEERING DATA MANAGEMENT SYSTEM) – SETUP AT BPCL – MUMBAI
            AND KOCHI REFINERY
          </Typography>
        </Box>

        <Box
          p={4}
          sx={{ backgroundColor: "#f9f9f9", borderRadius: 2, boxShadow: 3 }}
        >
          <Typography variant="body1" gutterBottom>
            • COMOS from SIEMENS was chosen as EDMS solution
          </Typography>
          <Typography variant="body1" gutterBottom>
            • Complete document management utility was developed in COMOS along
            with WEB based search engine for engineering assets and their
            related documentation
          </Typography>
          <Typography variant="body1" gutterBottom>
            • More than 980K documents were uploaded into this system with
            complete meta data entry and object level linking
          </Typography>
          <Typography variant="body1" gutterBottom>
            • Following IT activities were performed by our team:
          </Typography>

          <List dense>
            <ListItem>
              <ListItemText primary="COMOS database server established at Mumbai and COCHI refinery" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Common license server for both sites" />
            </ListItem>
            <ListItem>
              <ListItemText primary="COMOS thick client installation" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Web hosting on intranet site within BPCL for COMOS / EDMS web access, uploads of additional documents, version / revision management, workflows for document and data control" />
            </ListItem>
          </List>
        </Box>
      </Container>

      <Footer />
    </>
  );
};

export default EDMS;
