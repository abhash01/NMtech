import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Grid,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import TopNav from "../../components/Navbar/TopNav/TopNav";
import SubNav from "../../components/Navbar/SubNav/SubNav";
import Footer from "../Footer/Footer";

const EngineeringSoftwareExpertise = () => {
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

  const softwareExpertise = [
    {
      title: "Siemens",
      tools: [
        "Process Industry: COMOS (All modules) – Engineering to Operations",
        "Product Industry: NX, OpCenter, Technomatix and PLM solutions",
        "Predictive Maintenance: SiePA, Senseye",
      ],
    },
    {
      title: "Hexagon – Smart Plant Solutions",
      tools: ["SPPID", "SPI (INTOOLS)", "SPEL", "SP3D"],
    },
    {
      title: "AVEVA Solutions",
      tools: [
        "E3D",
        "AVEVA ENGINEERING",
        "AVEVA Diagrams",
        "AVEVA NET",
        "OSI-Pi",
        "Prism",
      ],
    },
    {
      title: "Bentley Systems",
      tools: ["Open Plant – iModel", "Synchro", "Context Capture", "MicroStation"],
    },
    {
      title: "Other Tools",
      tools: [
        "EPLAN",
        "LOGI Doc",
        "Solid Works",
        "Fusion 360",
        "AutoCAD Plant 3D",
        "Solid Edge",
        "NX",
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
            Engineering Software Expertise
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Explore our proficiency in industry-leading engineering tools across
            process, product, and operations domains.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {softwareExpertise.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Card
                elevation={4}
                sx={{
                  height: "100%",
                  borderRadius: 2,
                  background: "#f9f9f9",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h6" color="primary" gutterBottom>
                    {item.title}
                  </Typography>
                  <List dense>
                    {item.tools.map((tool, i) => (
                      <ListItem key={i} sx={{ pl: 0 }}>
                        <ListItemText primary={`• ${tool}`} />
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

export default EngineeringSoftwareExpertise;
