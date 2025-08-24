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
import multiImg from "../../assets/siemensComos/multiImg.png";
import oamImg from "../../assets/siemensComos/oamImg.png";
import giImg from "../../assets/siemensComos/giImg.png";
import smmImg from "../../assets/siemensComos/smmImg.png";
import inspImg from "../../assets/siemensComos/inspImg.png";
import scanImg from "../../assets/siemensComos/scanImg.png";
import checkImg from "../../assets/siemensComos/checkImg.png";
import sensorImg from "../../assets/siemensComos/sensorImg.png";
import sensorImg1 from "../../assets/siemensComos/sensorImg1.png";
import dataImg from "../../assets/siemensComos/dataImg.png";
import arImg from "../../assets/siemensComos/arImg.png";
import MainLayout from "../layouts/MainLayout";
import { ExpandMore } from "@mui/icons-material";

const data = [
  {
    title: "Multi-Tool",
    item: [
      {
        image: multiImg,
        alt: "Multi-Tool",
        description: "",
      },
    ],
  },
  {
    title: "Operator Activities Managed",
    item: [
      {
        image: oamImg,
        alt: "Operator Activities Managed",
        description: "",
      },
    ],
  },
  {
    title: "Governing Idea behind COMOS Mobile Worker",
    item: [
      {
        image: giImg,
        alt: "Governing Idea behind COMOS Mobile Worker",
        description: "",
      },
    ],
  },
  {
    title: "Customisable Home page for User",
    item: [
      {
        image: smmImg,
        alt: "Governing Idea behind COMOS Mobile Worker",
        description: "Shift Manager or Plant Head",
      },
      {
        image: inspImg,
        alt: "Inspector or Maintenance image",
        description: "Inspector or Maintenance In-charge / Head",
      },
      {
        image: scanImg,
        alt: "Inspector or Maintenance image",
        description:
          "Scan (using QR/Bar Code or AR image recognition) to Open Asset",
      },
      {
        image: checkImg,
        alt: "Checklist for Operator img",
        description: "Checklist for Operator",
        points: [
          "Design your own checklist",
          "Link and bring check list from ERP application like: SAP or CAE application like COMOS",
        ],
      },
      {
        image: sensorImg,
        alt: "Sensor img",
        description:
          "View Real-Time Sensor Data from DCS / PLC or Data Historian",
        points: [
          "Application can be connected to any control system via OPC-UA connector, to bring out the real-time data with correct measurement units on Operators tablet / Helmet / HoloLens",
        ],
      },
      {
        image: sensorImg1,
        alt: "Sensor img1",
        description: "",
      },
      {
        image: arImg,
        alt: "AR and GPS img",
        description: "AR and GPS based Navigation",
      },
      {
        image: dataImg,
        alt: "Data img",
        description: "Data from Various applications are integrated",
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

const OperatorRounds = () => {
  return (
    <MainLayout>
      <Container maxWidth="lg" sx={{ py: 6, paddingInline: "1rem !important" }}>
        <Box textAlign="center" mb={5}>
          <Typography
            variant="h5"
            fontWeight={600}
            sx={{ color: "var( --color-primary-light)" }}
            gutterBottom
          >
            Digital Operator Rounds / Mobile Worker
          </Typography>
          <Typography variant="body1" color="text.secondary">
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
                </AccordionSummary>
                <AccordionDetails>
                  {section.item.map((imgItem, i) => (
                    <Grid
                      size={{ xs: 12 }}
                      key={i}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      {imgItem.description && (
                        <Typography
                          variant="body1"
                          sx={{
                            color: "var(--color-primary)",
                            mt: 6,
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

export default OperatorRounds;
