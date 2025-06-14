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

const LenzingAutria = () => {
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
            LENZING (AUTRIA) – INTELLIGENT P&ID DRAFTING IN COMOS
          </Typography>
        </Box>

        <Box
          p={4}
          sx={{ backgroundColor: "#f9f9f9", borderRadius: 2, boxShadow: 3 }}
        >
          <Typography variant="body1" gutterBottom>
            • Project received from SIEMENS Austria – as part of AI development
          </Typography>

          <Typography variant="body1" mt={2}>
            • Digitized 465 P&IDs in COMOS from scanned PDF files
          </Typography>

          <Typography variant="body1" mt={2}>
            • All P&IDs were custom size e.g. A0 + 4*A4 in width
          </Typography>

          <Typography variant="body1" mt={2}>
            • COMOS V10.4.1 over SQL DB provided by LENZING
          </Typography>

          <Typography variant="body1" mt={2}>
            • Weekly COMOS Working Layer Export after digitizing the P&IDs with
            proper QC
          </Typography>
          <Typography variant="body1" mt={2}>
            • QC Queries developed by our COMOS Admin, which was appreciated by
            LENZING
          </Typography>
          <Typography variant="body1" mt={2}>
            • Complete project handed over in a span of 6 months with team size
            of 12 engineers
          </Typography>
        </Box>
      </Container>

      <Footer />
    </>
  );
};

export default LenzingAutria;
