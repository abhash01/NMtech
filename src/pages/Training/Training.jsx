import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Container,
  useMediaQuery,
  Grid,
  styled,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import TopNav from "../../components/Navbar/TopNav/TopNav";
import SubNav from "../../components/Navbar/SubNav/SubNav";
import Footer from "../Footer/Footer";

const trainingData = [
  {
    title: "COMOS from SIEMENS",
    subtopics: [
      {
        subtitle: "User Level Training",
        points: [
          "Basic",
          "Process [BFD, PFD, P&ID, PDS, List reports]",
          "Instrumentation [Index, IO List, ILD, JIB Schedule, Cable Schedule, Control System engineering, Hook-Ups]",
          "Electrical [SLD, Schematics, Consumer List, Cable Schedule, Installation Hook-Ups]",
          "Plant Documentation – DDMS",
          "3D Integration with E3D",
          "Plant Maintenance activities with planning, work permits, LOTO",
          "Asset KPI monitoring",
        ],
      },
      {
        subtitle: "ADMIN Level Training",
        points: [
          "ADMIN – I, II and III [Including script writing and DLL creation]",
        ],
      },
      {
        subtitle: "COMOS WalkInside",
        points: [
          "Editor, Viewer and Scenario builder",
          "4D simulation [interface with planning]",
        ],
      },
      {
        subtitle: "COMOS Web",
        points: [
          "Setup and configuration",
          "Basic operation",
          "Document management, Task management, redlining and workflow approvals",
          "Dashboards: Creation and drill downs",
        ],
      },
    ],
  },
  {
    title:
      "Smart Plant Solutions from HEXAGON [both User level and Admin Levels]",
    subtopics: [
      { subtitle: "SPPID" },
      { subtitle: "SPI" },
      { subtitle: "SP3D" },
    ],
  },
  {
    title: "AVEVA Engineering Solutions",
    subtopics: [
      {
        subtitle: "AVEVA P&ID and Diagrams",
      },
      {
        subtitle: "AVEVA Engineering",
      },
      {
        subtitle: "AVEVA E3D",
      },
      {
        subtitle: "AVEVA NET",
      },
    ],
  },
];

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

const Training = () => {
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

      <Container maxWidth="md" sx={{ py: 6, paddingInline: "1rem !important" }}>
        <Box>
          <Typography
            variant="h5"
            component="h2"
            sx={{ color: "var( --color-primary-light)" }}
            gutterBottom
            textAlign="center"
            fontWeight={600}
          >
            Training
          </Typography>
          <Typography
            variant="body1"
            component="h2"
            sx={{ color: "var( --color-dark)" }}
            gutterBottom
            textAlign="center"
            fontWeight={400}
          >
            We provide training on below Engineering Software Solutions:
          </Typography>

          <Grid container spacing={2} sx={{ marginTop: "1rem" }}>
            {trainingData.map((section, i) => (
              <Box
                key={i}
                sx={{ mb: 4 }}
                borderBottom={1}
                borderColor="divider"
                width={"100%"}
              >
                <Typography variant="h6" fontWeight={600} sx={{ mb: 1 }}>
                  • {section.title}
                </Typography>

                {section.subtopics.map((sub, j) => (
                  <Box key={j} sx={{ pl: 2, mb: 0 }}>
                    {sub.subtitle && (
                      <Typography
                        variant="subtitle1"
                        fontWeight={500}
                        sx={{ mb: 0 }}
                      >
                        ○ {sub.subtitle}
                      </Typography>
                    )}
                    <List dense sx={{ listStyleType: "square", pl: 4 }}>
                      {sub.points &&
                        sub.points.map((point, k) => (
                          <ListItem
                            key={k}
                            sx={{ display: "list-item", py: 0 }}
                          >
                            <ListItemText primary={point} />
                          </ListItem>
                        ))}
                    </List>
                  </Box>
                ))}
              </Box>
            ))}
          </Grid>
        </Box>
      </Container>

      <Footer />
    </>
  );
};

export default Training;
