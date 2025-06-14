import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import TopNav from "../../components/Navbar/TopNav/TopNav";
import SubNav from "../../components/Navbar/SubNav/SubNav";
import Footer from "../Footer/Footer";

export const ServiceInclude = () => {
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

  const services = [
    {
      title: "Digital Twin Strategy",
      points: [
        "Evaluating Solutions",
        "Building roadmap for Digital Twin",
      ],
    },
    {
      title: "Enterprise Data Architecture",
      points: [
        "Enterprise-wide data & drawing management",
        "Optimized data structure design",
      ],
    },
    {
      title: "Software Administration",
      points: [
        "Database setup",
        "Software installations",
        "User rights and access control",
      ],
    },
    {
      title: "Application Support",
      points: [
        "Expert Administrator support",
        "Support for all listed engineering applications",
      ],
    },
    {
      title: "Data Consistency Utilities",
      points: [
        "Compare engineering data",
        "Ensure consistency across software platforms",
      ],
    },
    {
      title: "Training & Enablement",
      points: [
        "User-level training",
        "Admin-level training",
      ],
    },
  ];

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
          <Typography variant="h4" component="h1" gutterBottom>
            Services We Offer
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Supporting your digital engineering journey through expert consulting,
            architecture, administration, and training.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {services.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index} sx={{ display: "flex" }}>
              <Card
                elevation={4}
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 2,
                  background: "#f9f9f9",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" color="primary" gutterBottom>
                    {item.title}
                  </Typography>
                  <List dense>
                    {item.points.map((point, i) => (
                      <ListItem key={i} sx={{ pl: 0 }}>
                        <ListItemText primary={`• ${point}`} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Footer />
    </>
  );
};
