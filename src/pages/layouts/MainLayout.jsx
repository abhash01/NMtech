import { useEffect, useState } from "react";
import { Container, useMediaQuery, Fab, Zoom } from "@mui/material";
import TopNav from "../../components/Navbar/TopNav/TopNav";
import Footer from "../Footer/Footer";
import SubNav from "../../components/Navbar/SubNav/SubNav";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const MainLayout = ({ children, showSubNav = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const isMobileView = useMediaQuery("(max-width: 991px)");

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
      // Show scroll button when scrolled more than 300px
      setShowScrollButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 500,
      behavior: "smooth",
    });
  };

  const getScrolledHeight = () => {
    if (isMobileView) return "75px";
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

      {showSubNav && (
        <Container
          maxWidth
          disableGutters
          sx={{
            position: "sticky",
            top: getScrolledHeight(),
            zIndex: 999,
            background: "var(--color-primary-light)",
          }}
        >
          <SubNav scrolledHeight={getScrolledHeight()} />
        </Container>
      )}

      <Container maxWidth disableGutters>
        {children}
      </Container>

      <Container maxWidth disableGutters>
        <Footer />
      </Container>

      {/* Scroll to top button */}
      <Zoom in={showScrollButton}>
        <Fab
          aria-label="scroll to top"
          onClick={scrollToTop}
          sx={{
            position: "fixed",
            bottom: 16,
            right: 16,
            zIndex: 1000,
            backgroundColor: "var(--color-primary-light)",
            color: "var(--color-primary)",
            "&:hover": {
              backgroundColor: "var(--color-primary-light)",
              color: "var(--color-primary)",
            },
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Zoom>
    </>
  );
};

export default MainLayout;
