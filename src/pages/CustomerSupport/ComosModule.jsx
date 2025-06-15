import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Container,
  useMediaQuery,
  CardMedia,
} from "@mui/material";
import TopNav from "../../components/Navbar/TopNav/TopNav";
import SubNav from "../../components/Navbar/SubNav/SubNav";
import Footer from "../Footer/Footer";
import img1 from "../../assets/images/Picture21.png";
import img2 from "../../assets/images/Picture22.png";

const ComosModule = () => {
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
            COMOS PORTFOLIO FROM SIEMENS
          </Typography>
        </Box>

        <Box>
          <CardMedia
            component="img"
            height="100%"
            image={img1}
            alt="Comos Portfolio"
            sx={{ mb: 3, maxWidth: "720px", margin: "0 auto" }}
          />
          <CardMedia
            component="img"
            height="100%"
            image={img2}
            alt="Comos Portfolio"
            sx={{ maxWidth: "720px", margin: "0 auto" }}
          />
          <Typography
            variant="h6"
            component="h1"
            gutterBottom
            mt={3}
            sx={{ textAlign: "center" }}
          >
            Open Architecture can interface with any industry standard
            application.
          </Typography>
        </Box>
      </Container>

      <Footer />
    </>
  );
};

export default ComosModule;
