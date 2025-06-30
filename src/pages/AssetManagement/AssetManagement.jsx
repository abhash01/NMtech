import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Container,
  useMediaQuery,
  Stack,
  Grid,
  styled,
} from "@mui/material";
import TopNav from "../../components/Navbar/TopNav/TopNav";
import SubNav from "../../components/Navbar/SubNav/SubNav";
import Footer from "../Footer/Footer";
import ExtensionIcon from "@mui/icons-material/Extension";
import InteractiveImg from "../../assets/siemensComos/Picture4.png";
import PBF from "../../assets/siemensComos/Picture5.jpg";

const ImageCard = styled(Box)(({ theme }) => ({
  width: "100%",
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: "0px 6px 24px rgba(0, 0, 0, 0.12)",
  border: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
  objectFit: "cover",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  cursor: "pointer",

  "&:hover": {
    transform: "scale(1.03)",
    boxShadow: "0px 10px 32px rgba(0, 0, 0, 0.2)",
  },
}));

const AssetManagement = () => {
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

      <Container maxWidth="lg" sx={{ py: 6, paddingInline: "1rem !important" }}>
        <Box>
          <Typography
            variant="h5"
            component="h2"
            sx={{ color: "var( --color-primary-light)" }}
            gutterBottom
            textAlign="center"
            fontWeight={600}
          >
            How COMOS Looks for Asset Management and Design Engineering
          </Typography>

          <Grid container spacing={2} sx={{ marginTop: "1rem" }}>
            <Grid size={12}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <ExtensionIcon
                  fontSize="small"
                  sx={{ color: "var(--color-dark)" }}
                />
                <Typography
                  variant="h6"
                  component="h6"
                  sx={{ color: "var(--color-dark)" }}
                  fontWeight={600}
                  gutterBottom
                >
                  Interactive and Detailed Plant Hierarchy
                </Typography>
              </Stack>
            </Grid>
            <Grid size={12} sx={{ display: "flex", justifyContent: "center" }}>
              <ImageCard
                component="img"
                src={InteractiveImg}
                alt="Interactive Illustration"
                sx={{ marginTop: "1rem", maxWidth: "70%" }}
              />
            </Grid>
            <Grid size={12} sx={{ display: "flex", justifyContent: "center" }}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <ExtensionIcon
                  fontSize="small"
                  sx={{ color: "var(--color-dark)" }}
                />
                <Typography
                  variant="h6"
                  component="h6"
                  sx={{ color: "var(--color-dark)" }}
                  fontWeight={600}
                  gutterBottom
                >
                  Process Block Flow Diagram
                </Typography>
              </Stack>
            </Grid>
            <Grid size={12} sx={{ display: "flex", justifyContent: "center" }}>
              <ImageCard
                component="img"
                src={PBF}
                alt="PBF Illustration"
                sx={{ marginTop: "1rem", maxWidth: "70%" }}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Footer />
    </>
  );
};

export default AssetManagement;
