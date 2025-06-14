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

const KochiRefineryProject = () => {
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
            BPCL – EPC DATA – DIGITAL HANDOVER – KOCHI REFINERY – INTELLIGENT
            P&ID DRAFTING AND IOM
          </Typography>
        </Box>

        <Box
          p={4}
          sx={{ backgroundColor: "#f9f9f9", borderRadius: 2, boxShadow: 3 }}
        >
          <Typography variant="body1" gutterBottom>
            • Entire setup on AWS cloud
          </Typography>

          <Typography variant="body1" mt={2}>
            • MS Block refinery unit, following intelligent documents created in
            COMOS at BPCL – Kochi refinery. All documents are interactive inside
            single DB. Viewable over COMOS Web for all associated engineering
            assets
          </Typography>
          <List dense>
            <ListItem>
              <ListItemText primary="~410 Intelligent P&ID" />
            </ListItem>
            <ListItem>
              <ListItemText primary="~485 Circuit Diagrams" />
            </ListItem>
            <ListItem>
              <ListItemText primary="~20 SLD (Electrical Single Line Diagram)" />
            </ListItem>
            <ListItem>
              <ListItemText primary="~500 Instrument Hook-Ups" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Integrated 3D Model" />
            </ListItem>
          </List>

          <Typography variant="body1" mt={2}>
            • Prepared control system interlock linking (via P&ID drafting) over
            Cause & Effect diagram, to simulate individual interlocks for
            operators to understand the interlocks in detail [our Own Customized
            scripting in COMOS]
          </Typography>

          <Typography variant="body1" mt={2}>
            • Prepared interactive Plant Operation Manuals (IOM) for all process
            units of MSBP
          </Typography>

          <Typography variant="body1" mt={2}>
            • Completed entire project in <strong>5 months</strong> with a team
            of <strong>23 engineers</strong>.
          </Typography>
        </Box>
      </Container>

      <Footer />
    </>
  );
};

export default KochiRefineryProject;
