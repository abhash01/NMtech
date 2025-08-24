import React from "react";
import {
  Box,
  Typography,
  Container,
  Stack,
  Grid,
  styled,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
} from "@mui/material";
import famImg from "../../assets/siemensComos/famImg.jpg";
import sopImg from "../../assets/siemensComos/sopImg.png";
import hseImg from "../../assets/siemensComos/hseImg.png";
import ctImg from "../../assets/siemensComos/ctImg.jpg";
import MainLayout from "../layouts/MainLayout";
import { ExpandMore } from "@mui/icons-material";

const data = [
  {
    title: "Familiarization Trainings, Learning Topography",
    item: [
      {
        image: famImg,
        alt: "Familiarization Trainings, Learning Topography",
        description:
          "Leverage the 3D models from design phase or use Laser scan point cloud or even 3D from photographs, to create a Virtual world for training operators on familiarising with plant layout.",
      },
    ],
  },
  {
    title: "Train operators on SOPs (Standard Operating Procedures)",
    item: [
      {
        image: sopImg,
        alt: "Train operators on SOPs (Standard Operating Procedures)",
        description:
          "Easy to build scenarios (without programming), add instructions (word based typing), Gears (like gloves, helmet, masks, screw driver, spanner set, multi-meter and such other tools to build real world like training environment.",
      },
    ],
  },
  {
    title: "HSE incidents training",
    item: [
      {
        image: hseImg,
        alt: "HSE incidents training",
        description: "",
      },
    ],
  },
  {
    title: "Collaborative Training",
    item: [
      {
        image: ctImg,
        alt: "Collaborative Training",
        description:
          "Operators need to learn to perform task in collaborative with personnel from different disciplines to complete the tasks. COMOS Walkinside provides a ready environment for such scenarios. Multiple Operators can login from their own PCs / VR headsets in same virtual model, to perform collaborative tasks.",
      },
    ],
  },
];

const ImageCard = styled(Box)(({ theme }) => ({
  width: "100%",
  marginInline: "auto",
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: "0px 6px 24px rgba(0, 0, 0, 0.12)",
  border: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
  objectFit: "cover",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  cursor: "pointer",

  // "&:hover": {
  //   transform: "scale(1.03)",
  //   boxShadow: "0px 10px 32px rgba(0, 0, 0, 0.2)",
  // },
}));

const OperatorTraining = () => {
  return (
    <MainLayout>
      <Container maxWidth="lg" sx={{ py: 6, paddingInline: "1rem !important" }}>
        <Box textAlign="center" mb={5}>
          <Typography
            variant="h5"
            fontWeight={600}
            color="var(--color-primary-light)"
            gutterBottom
          >
            Operator Training Simulator for Engineering and Operations phase of
            Plant
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ textAlign: "justify" }}
          >
            Easy to build scenarios, with record function. Add animations, gears
            and many more in light weighted 3D model to create training
            environment simulating real world cases. Merge 3D from any industry
            standard model file (E3D, SP3D, AutoCAD, Plant 3D, Solid Works,
            MicroStation, iModels, Step files, iGES files and such more).
          </Typography>
          <Divider
            sx={{
              width: "280px",
              height: "4px",
              backgroundColor: "var(--color-primary-light)",
              margin: "1rem auto",
              borderRadius: "2px",
              boxShadow: "0px 7px 11px 1px var(--color-primary-light)",
            }}
          />
        </Box>

        {data.map((section, index) => (
          <Card
            key={index}
            sx={{
              height: "100%",
              borderRadius: 3,
              boxShadow: 4,
              mt: 2,
              transition: "0.3s",
              color: "var( --color-primary)",
              bgcolor: "var(--color-primary-light)",
              "&:hover": { boxShadow: 8 },
            }}
          >
            <CardContent>
              <Accordion
                defaultExpanded={index === 0}
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
                    <ExpandMore sx={{ color: "var(--color-primary)" }} />
                  }
                >
                  <Typography fontWeight={500} variant="h6" component="h2">
                    {section.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {section.item.map((imgItem, i) => (
                    <Grid
                      size={{ xs: 12 }}
                      key={i}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        // alignItems: "center",
                      }}
                    >
                      {imgItem.description && (
                        <Typography
                          variant="body1"
                          sx={{
                            color: "var(--color-primary)",
                            mt: 2,
                            fontWeight: 500,
                          }}
                        >
                          {imgItem.description}
                        </Typography>
                      )}

                      {imgItem.points && imgItem.points.length > 0 && (
                        <Box
                          component="ul"
                          sx={{
                            mt: 1,
                            mb: 2,
                            color: "var(--color-dark)",
                            pl: 3,
                            textAlign: "left",
                            width: "100%",
                            maxWidth: "70%",
                          }}
                        >
                          {imgItem.points.map((point, idx) => (
                            <li
                              key={idx}
                              style={{
                                listStyleType: "disc",
                                color: "white",
                              }}
                            >
                              <Typography
                                variant="body2"
                                component="span"
                                sx={{ color: "var(--color-primary)" }}
                              >
                                {point}
                              </Typography>
                            </li>
                          ))}
                        </Box>
                      )}

                      {imgItem.table && imgItem.table}

                      <ImageCard
                        component="img"
                        src={imgItem.image}
                        alt={imgItem.alt}
                        sx={{
                          marginTop: "1rem",
                          maxWidth: { xs: "90%", sm: "80%", md: "70%" },
                        }}
                      />
                    </Grid>
                  ))}
                </AccordionDetails>
              </Accordion>
            </CardContent>
          </Card>
        ))}
      </Container>
    </MainLayout>
  );
};

export default OperatorTraining;
