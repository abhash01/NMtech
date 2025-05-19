import React, { useEffect, useState } from "react";
import { Box, Typography, Container, useMediaQuery } from "@mui/material";
import TopNav from "../Navbar/TopNav/TopNav";
import SubNav from "../Navbar/SubNav/SubNav";
import Footer from "../../pages/Footer/Footer";

const PageNotFound = () => {
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
    if (isMobileView) {
      return "75px";
    }
    return isScrolled ? "78px" : "150px";
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
          background: "var(--color-secondary-light)",
        }}
      >
        <SubNav scrolledHeight={getScrolledHeight()} />
      </Container>
      <Container maxWidth="md">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          minHeight="75vh"
          textAlign="center"
        >
          <Box
            component="img"
            src="https://media.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.gif"
            alt="Page Not Found"
            sx={{ width: 250, height: 250, mb: 4, borderRadius: "50%" }}
          />
          <Typography variant="h3" component="h1" gutterBottom>
            Page Not Found
          </Typography>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default PageNotFound;
