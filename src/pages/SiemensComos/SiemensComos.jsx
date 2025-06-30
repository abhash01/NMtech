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
import ComosImage from "../../assets/siemensComos/Picture1.jpg";
import HolisticImage from "../../assets/siemensComos/holisticImg.png";
import FeatureTable from "./FeatureTable ";
import DesignDocsTable from "./DesignDocsTable ";

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

const SiemensComos = () => {
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
            Siemens Comos
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
                  What is Comos?
                </Typography>
              </Stack>

              <Typography
                variant="body1"
                sx={{ color: "var(--color-dark)", marginLeft: "2rem" }}
              >
                COMOS is abbreviated form for <b>COM</b>ponent <b>O</b>bject{" "}
                <b>S</b>tructure. It is a web-based server, an integrated
                software solution based on Object Oriented Programming. Flat
                Database (without RDMS) making it most suitable for remote
                access without compromising on performance.
              </Typography>
            </Grid>
            <Grid size={12} sx={{ display: "flex", justifyContent: "center" }}>
              <ImageCard
                component="img"
                src={ComosImage}
                alt="COMOS Illustration"
                sx={{ marginTop: "1rem", maxWidth: "50%" }}
              />
            </Grid>
            <Grid size={12} sx={{ display: "flex", justifyContent: "center" }}>
              <ImageCard
                component="img"
                src={HolisticImage}
                alt="HOLISTIC Illustration"
                sx={{ marginTop: "1rem", maxWidth: "50%" }}
              />
            </Grid>

            <Grid size={12} sx={{ marginTop: "3rem" }}>
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
                  What are unique features of COMOS:
                </Typography>
              </Stack>
            </Grid>
            <Grid size={12}>
              <FeatureTable />
            </Grid>
            <Grid size={12} sx={{ marginTop: "3rem" }}>
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
                  Deliverables in COMOS:
                </Typography>
              </Stack>
            </Grid>
            <Grid size={12}>
              <DesignDocsTable />
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Footer />
    </>
  );
};

export default SiemensComos;
