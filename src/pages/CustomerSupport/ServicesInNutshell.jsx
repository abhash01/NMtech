import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/system";
import {
  Visibility,
  ThreeDRotation,
  Inventory,
  Description,
  Storage,
  Build,
  PhoneIphone,
  Settings,
  Assessment,
  Computer,
  Work,
  Assignment,
} from "@mui/icons-material"; // Replace with actual icons if available
import TopNav from "../../components/Navbar/TopNav/TopNav";
import SubNav from "../../components/Navbar/SubNav/SubNav";
import Footer from "../Footer/Footer";

const ServiceCard = styled(Box)(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius * 2,
  backgroundColor: "#f5f5f5",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  boxShadow: theme.shadows[1],
}));

const services = [
  {
    icon: <Visibility fontSize="large" color="secondary" />,
    title: "Reverse Engineering",
    description: "Above Ground: Laser Scanning; Under ground scanning",
  },
  {
    icon: <ThreeDRotation fontSize="large" color="secondary" />,
    title: "Intelligent 3D Modelling",
    description: "BIM, Plant 3D solutions",
  },
  {
    icon: <Inventory fontSize="large" color="secondary" />,
    title: "Plant Asset Register",
    description:
      "Detailed hierarchical Asset register with parent child relations",
  },
  {
    icon: <Description fontSize="large" color="secondary" />,
    title: "Intelligent 2D Drawings",
    description: "Linked and associated with Assets",
  },
  {
    icon: <Storage fontSize="large" color="secondary" />,
    title: "Complete Plant Documentation",
    description: "Organized, linked making a sound DDMS system",
  },
  {
    icon: <Build fontSize="large" color="secondary" />,
    title: "Integration with Plant Solutions",
    description: "ERP, RCM",
  },
  {
    icon: <PhoneIphone fontSize="large" color="secondary" />,
    title: "Mobile Worker",
    description: "Digitize all operations and maintenance activities",
  },
  {
    icon: <Settings fontSize="large" color="secondary" />,
    title: "Integration with OT Systems",
    description: "Predictive Maintenance, Decision Support System",
  },
  {
    icon: <Assessment fontSize="large" color="secondary" />,
    title: "Business Intelligence (BI)",
    description: "Integrated Dashboards from all data sources",
  },
  {
    icon: <Computer fontSize="large" color="secondary" />,
    title: "Training",
    description: "COMOS, SPI, SPPID, E3D",
  },
  {
    icon: <Assignment fontSize="large" color="secondary" />,
    title: "Drafting Services",
    description: "P&ID, ILD, SLD, Plot Plans, GA, etc",
  },
  {
    icon: <Work fontSize="large" color="secondary" />,
    title: "Man-Power Support",
    description:
      "Skilled engineers for Process, Piping, Instrumentation, Electrical",
  },
];

const ServicesInNutshell = () => {
  //   const theme = useTheme();
  //   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
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
        <Typography
          variant="h6"
          gutterBottom
          sx={{ mb: 4, fontWeight: "bold" }}
        >
          SERVICES IN A NUT-SHELL
        </Typography>

        <Grid container spacing={4}>
          {services.map((service, idx) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
              <ServiceCard>
                {service.icon}
                <Typography variant="subtitle1" mt={2} fontWeight="bold">
                  {service.title}
                </Typography>
                <Typography variant="body2" mt={1}>
                  {service.description}
                </Typography>
              </ServiceCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Footer />
    </>
  );
};

export default ServicesInNutshell;
