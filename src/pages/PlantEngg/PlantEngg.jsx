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
import cpmImg from "../../assets/siemensComos/cpmImg.png";
import cpmImg1 from "../../assets/siemensComos/cpmImg1.png";
import cpmImg2 from "../../assets/siemensComos/cpmImg2.png";
import cpmImg3 from "../../assets/siemensComos/cpmImg3.png";
import poImg from "../../assets/siemensComos/poImg.png";
import rfqImg from "../../assets/siemensComos/rfqImg.png";
import vendorImg from "../../assets/siemensComos/vendorImg.png";
import hookUpsImg from "../../assets/siemensComos/hookUpsImg.png";
import rivisionImg from "../../assets/siemensComos/rivisionImg.png";
import cemImg from "../../assets/siemensComos/cemImg.png";
import cemImg1 from "../../assets/siemensComos/cemImg1.png";
import plImg from "../../assets/siemensComos/plImg.jpg";
import plImg1 from "../../assets/siemensComos/plImg1.png";
import csaImg from "../../assets/siemensComos/csaImg.png";
import oeImg from "../../assets/siemensComos/oeImg.png";
import pomImg from "../../assets/siemensComos/pomImg.png";
import MainLayout from "../layouts/MainLayout";
import { ExpandMore } from "@mui/icons-material";

const data = [
  {
    title: "COMOS Customization Ready Solutions (iDB or cDB)",
    item: [
      {
        image: cpmImg,
        alt: "Complete Project Management Image",
        description: "Complete Project Management",
        subtitle: "Project Planning",
        points: [
          "Detailed Activity List",
          "Gantt Chart",
          "Resource planning",
          {
            text: "Automated reports for",
            subpoints: ["Planned vs. Actual", "Actual vs. Forecast"],
          },
          "Organogram",
          "Project Charter",
          "Statement Of Work",
          "Change Management",
          "Issue Management",
          "Procurement, Logistics and delivery",
        ],
      },
      {
        image: cpmImg1,
        alt: "Complete Project Management Image1",
        description: "",
        subtitle: "",
      },
      {
        image: cpmImg2,
        alt: "Complete Project Management Image2",
        description: "",
        subtitle: "",
      },
      {
        image: cpmImg3,
        alt: "Complete Project Management Image3",
        description: "",
        subtitle: "",
      },
    ],
  },
  {
    title: "",
    item: [
      {
        image: poImg,
        alt: "Complete Project Management Image",
        description: "",
        subtitle: "PO request cycle",
      },
    ],
  },
  {
    title: "",
    item: [
      {
        image: rfqImg,
        alt: "Complete Project Management Image",
        description: "",
        subtitle: "RFQ auto evaluation report (Bid comparison)",
      },
    ],
  },
  {
    title: "",
    item: [
      {
        image: vendorImg,
        alt: "Complete Project Management Image",
        description: "",
        subtitle: "Approve selected vendor and create PO",
      },
    ],
  },
  {
    title: "",
    item: [
      {
        image: hookUpsImg,
        alt: "Complete Project Management Image",
        description: "Interactive Instrument Hook-Ups",
        subtitle: "",
      },
    ],
  },
  {
    title: "",
    item: [
      {
        image: rivisionImg,
        alt: "Complete Project Management Image",
        description: "Revision Highlighting (Comparison between 2 revisions)",
        subtitle: "",
        points: [
          "Compare any 2 revisions of any COMOS document (Evaluation report and Interactive reports)",
        ],
      },
    ],
  },
  {
    title: "",
    item: [
      {
        image: undefined,
        alt: "Complete Project Management Image",
        description: "Multi-Object Datasheet",
        subtitle: "",
      },
    ],
  },
  {
    title: "",
    item: [
      {
        image: undefined,
        alt: "Complete Project Management Image",
        description: "ISA Datasheets for Instruments",
        subtitle: "",
      },
    ],
  },
  {
    title: "",
    item: [
      {
        image: undefined,
        alt: "Complete Project Management Image",
        description: "Cable Block Diagrams",
        subtitle: "",
      },
    ],
  },
  {
    title: "",
    item: [
      {
        image: cemImg,
        alt: "Complete Project Management Image",
        description: "Cause and Effect Matrix",
        subtitle: "",
        points: [
          "Perform connections on P&ID to interlock objects and get an automated Cause and Effect Matrix, as shown below:",
        ],
      },
      {
        image: cemImg1,
        alt: "Complete Project Management Image",
        description: "",
        subtitle: "",
      },
    ],
  },
  {
    title: "",
    item: [
      {
        image: plImg,
        alt: "Complete Project Management Image",
        description:
          "Interactive Plant Layouts (piping, mechanical, instrument plot plans, electrical and such) via 3D interface and AutoCAD based native files",
        subtitle: "",
        points: [
          "Navigate from Loop drawing or P&ID or PFD or any such other drawings, where the Asset is show, to its location on plant layout, using navigate option, as shown below: (navigate to JB on layout from Loop drawing):",
        ],
      },
      {
        image: plImg1,
        alt: "Complete Project Management Image",
        description: "",
        subtitle: "",
      },
    ],
  },
  {
    title: "",
    item: [
      {
        image: undefined,
        alt: "Complete Project Management Image",
        description: "Custom Dashboarding (using queries and DLL)",
        subtitle: "",
      },
    ],
  },
  {
    title: "",
    item: [
      {
        image: csaImg,
        alt: "Control System Architecture",
        description: "Control System Architecture",
        subtitle: "",
      },
    ],
  },
  {
    title: "",
    item: [
      {
        image: undefined,
        alt: "Complete Project Management Image",
        description: "Network Drawings",
        subtitle: "",
      },
    ],
  },
  {
    title: "",
    item: [
      {
        image: undefined,
        alt: "Complete Project Management Image",
        description: "Tendering",
        subtitle: "",
      },
    ],
  },
  {
    title: "",
    item: [
      {
        image: oeImg,
        alt: "Offer Evaluation",
        description: "Offer Evaluation",
        subtitle: "",
      },
    ],
  },
  {
    title: "",
    item: [
      {
        image: undefined,
        alt: "Complete Project Management Image",
        description: "Preliminary Noise Calculations",
        subtitle: "",
      },
    ],
  },
  {
    title: "",
    item: [
      {
        image: pomImg,
        alt: "Interactive Plant Operating Manuals",
        description: "Interactive Plant Operating Manuals",
        subtitle: "",
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

  "&:hover": {
    transform: "scale(1.03)",
    boxShadow: "0px 10px 32px rgba(0, 0, 0, 0.2)",
  },
}));

const PlantEngg = () => {
  return (
    <MainLayout>
      <Container maxWidth="lg" sx={{ py: 6, paddingInline: "1rem !important" }}>
        <Box textAlign="center" mb={5}>
          <Typography
            variant="h5"
            component="h2"
            sx={{ color: "var( --color-primary-light)" }}
            gutterBottom
            textAlign="center"
            fontWeight={600}
          >
            Complete customised iDB for plant engineering
          </Typography>
          <Typography
            variant="body1"
            component="h2"
            sx={{ color: "var( --color-dark)" }}
            gutterBottom
            textAlign="center"
            fontWeight={400}
          >
            Make Industry Data Usable for Everyone, To Increase the Value of
            Existing Data.
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
                  {section.item.map((imgItem, i) => (
                    <Typography
                      variant="body1"
                      component="p"
                      key={i}
                      sx={{ color: "var(--color-primary)" }}
                    >
                      {imgItem.description}
                    </Typography>
                  ))}
                  {section.item.map((imgItem, i) => (
                    <Typography
                      variant="body1"
                      component="p"
                      key={i}
                      sx={{ color: "var(--color-primary)" }}
                    >
                      {imgItem.subtitle}
                    </Typography>
                  ))}
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
                              style={{ listStyleType: "disc", color: "white" }}
                            >
                              {typeof point === "string" ? (
                                <Typography
                                  variant="body2"
                                  component="span"
                                  sx={{ color: "var(--color-primary)" }}
                                >
                                  {point}
                                </Typography>
                              ) : (
                                <>
                                  <Typography
                                    variant="body2"
                                    component="span"
                                    sx={{
                                      color: "var(--color-primary)",
                                      fontWeight: 500,
                                    }}
                                  >
                                    {point.text}
                                  </Typography>
                                  <ul style={{ marginLeft: "1rem" }}>
                                    {point.subpoints.map((sub, subIdx) => (
                                      <li
                                        key={subIdx}
                                        style={{ listStyleType: "circle" }}
                                      >
                                        <Typography
                                          variant="body2"
                                          component="span"
                                          sx={{ color: "var(--color-primary)" }}
                                        >
                                          {sub}
                                        </Typography>
                                      </li>
                                    ))}
                                  </ul>
                                </>
                              )}
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

export default PlantEngg;
