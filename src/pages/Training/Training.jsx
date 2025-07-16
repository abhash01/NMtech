import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import { ExpandMore, CheckCircle } from "@mui/icons-material";
import MainLayout from "../layouts/MainLayout";

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
    title: "Smart Plant Solutions from HEXAGON [User & Admin Level]",
    subtopics: [
      { subtitle: "SPPID" },
      { subtitle: "SPI" },
      { subtitle: "SP3D" },
    ],
  },
  {
    title: "AVEVA Engineering Solutions",
    subtopics: [
      { subtitle: "AVEVA P&ID and Diagrams" },
      { subtitle: "AVEVA Engineering" },
      { subtitle: "AVEVA E3D" },
      { subtitle: "AVEVA NET" },
    ],
  },
];

const Training = () => {
  return (
    <MainLayout>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box textAlign="center" mb={4}>
          <Typography
            variant="h4"
            fontWeight={600}
            color="var(--color-primary-light)"
            gutterBottom
          >
            Training
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Explore our training programs on leading engineering software
            solutions.
          </Typography>
          <Divider
            sx={{
              width: "280px",
              height: "4px",
              backgroundColor: "var(--color-primary-light)",
              margin: "1rem auto",
              borderRadius: "2px",
              boxShadow: 8,
            }}
          />
        </Box>

        <Grid container spacing={4}>
          {trainingData.map((section, i) => (
            <Grid size={12} key={i}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: 3,
                  boxShadow: 4,
                  transition: "0.3s",
                  color: "var( --color-primary)",
                  bgcolor: "var(--color-primary-light)",
                  "&:hover": { boxShadow: 8 },
                }}
              >
                <CardContent>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    {section.title}
                  </Typography>

                  {section.subtopics.map((sub, j) => (
                    <Accordion
                      key={j}
                      disableGutters
                      sx={{
                        boxShadow: "none",
                        borderBottom: "1px solid var(--color-primary)",
                        bgcolor: "transparent",
                        color: "var(--color-primary)",
                        "&:last-of-type": {
                          borderBottom: "none",
                        },
                      }}
                    >
                      <AccordionSummary
                        expandIcon={
                          sub.points ? (
                            <ExpandMore
                              sx={{ color: "var(--color-primary)" }}
                            />
                          ) : null
                        }
                      >
                        <Typography fontWeight={500}>{sub.subtitle}</Typography>
                      </AccordionSummary>
                      {sub.points && (
                        <AccordionDetails>
                          <List dense>
                            {sub.points.map((point, k) => (
                              <ListItem key={k} disablePadding>
                                <ListItemIcon>
                                  <CheckCircle
                                    sx={{ color: "var(--color-primary)" }}
                                    fontSize="small"
                                  />
                                </ListItemIcon>
                                <ListItemText primary={point} />
                              </ListItem>
                            ))}
                          </List>
                        </AccordionDetails>
                      )}
                    </Accordion>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </MainLayout>
  );
};

export default Training;
