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
import MaintenanceStrategyTable from "./MaintenanceStrategyTable ";
import mainImg from "../../assets/siemensComos/mainImg.png";
import reactImg from "../../assets/siemensComos/reactImg.png";
import prevImg from "../../assets/siemensComos/prevImg.png";
import pipelineImg from "../../assets/siemensComos/pipelineImg.png";
import riskImg from "../../assets/siemensComos/riskImg.png";
import thickImg from "../../assets/siemensComos/thickImg.png";
import CMImg from "../../assets/siemensComos/CMImg.png";
import CMImg1 from "../../assets/siemensComos/CMImg1.png";
import CMImg2 from "../../assets/siemensComos/CMImg2.png";
import RCMImg from "../../assets/siemensComos/RCMImg.png";
import RCMImg1 from "../../assets/siemensComos/RCMImg1.png";
import RCMImg2 from "../../assets/siemensComos/RCMImg2.png";
import monitorImg from "../../assets/siemensComos/monitorImg.png";
import visualImg from "../../assets/siemensComos/visualImg.png";
import viewImg from "../../assets/siemensComos/viewImg.png";
import wpImg from "../../assets/siemensComos/wpImg.png";
import wpImg1 from "../../assets/siemensComos/wpImg1.png";
import rmImg from "../../assets/siemensComos/rmImg.png";
import smImg from "../../assets/siemensComos/smImg.png";
import smImg1 from "../../assets/siemensComos/smImg1.png";
import smImg2 from "../../assets/siemensComos/smImg2.png";
import sdpImg from "../../assets/siemensComos/sdpImg.png";
import sdpImg1 from "../../assets/siemensComos/sdpImg1.png";
import lotoImg from "../../assets/siemensComos/lotoImg.png";
import wbvImg from "../../assets/siemensComos/wbvImg.png";
import wbvImg1 from "../../assets/siemensComos/wbvImg1.png";
import wbvImg2 from "../../assets/siemensComos/wbvImg2.png";
import MainLayout from "../layouts/MainLayout";
import { ExpandMore } from "@mui/icons-material";

const data = [
  {
    title: "Prepare and manage Maintenance Plans",
    item: [
      {
        image: mainImg,
        alt: "Prepare and manage Maintenance Plans",
        description:
          "COMOS following types of pre-defined Maintenance plans for any plant asset:",
        points: [
          "Reactive or Event Triggered Maintenance",
          "Risk based Maintenance (RBI, RA, RCM, RCA)",
          "Preventive Maintenance",
          "Condition Based Maintenance",
          "Predictive Maintenance",
          "Prescriptive Maintenance",
        ],
        table: <MaintenanceStrategyTable />,
      },
    ],
  },
  {
    title: "Reactive or Event Triggered Maintenance",
    item: [
      {
        image: reactImg,
        alt: "Reactive or Event Triggered Maintenance",
        description:
          "COMOS is linked to SAP, DCS (via OPC UA), Mobile Operator, thereby any event, incident triggered from this system either manually or automatically are registered in COMOS in real-time. These events in turn create reactive maintenance plans from previously defined strategies, as shown below:",
      },
    ],
  },
  {
    title: "Preventive Maintenance Plans",
    item: [
      {
        image: prevImg,
        alt: "Preventive Maintenance Plans",
        description:
          "Based on OEM manuals, define preventive maintenance. Select the activities for work packages from pre-defined libraries, Even drag and drop them on P&ID for users to get the next due date and also can check the activities and task for maintenance plan.",
      },
    ],
  },
  {
    title: "Pipeline Inspection Plan with NDT measurement records capture&ID",
    item: [
      {
        image: pipelineImg,
        alt: "Pipeline Inspection Plan",
        description: "",
      },
    ],
  },
  {
    title: "Asset Risk Identification and Visualise over 3D chart",
    item: [
      {
        image: riskImg,
        alt: "Asset Risk Identification",
        description:
          "Identify Asset risk, based on failure modes according to international standards of API 582 and not just visualise, but navigate to the asset from Risk chart on a click:",
      },
    ],
  },
  {
    title:
      "Pipeline Thickness Measurement Module (NDT Measurements and Assessment)",
    item: [
      {
        image: thickImg,
        alt: " Thickness Measurement Module",
        description: "",
      },
    ],
  },
  {
    title: "Instrument Calibration Management",
    item: [
      {
        image: CMImg,
        alt: "Instrument Calibration Management",
        description: "",
      },
      {
        image: CMImg1,
        alt: "Instrument Calibration Management 1",
        description: "",
      },
      {
        image: CMImg2,
        alt: "Instrument Calibration Management 2",
        description: "",
      },
    ],
  },
  {
    title: "RCM ",
    item: [
      {
        image: RCMImg,
        alt: "RCM",
        description:
          "Perform RCM in an integrated manner with failure modes FMEA, past history, KPIs, Incidents and Events occurred on the Asset and get automated Inspection plan suggestions to optimise the Maintenance and save cost:",
      },
      {
        image: RCMImg1,
        alt: "RCM  1",
        description: "",
      },
      {
        image: RCMImg2,
        alt: "RCM  2",
        description: "",
      },
    ],
  },
  {
    title: "Monitor and calculate Asset KPIs",
    item: [
      {
        image: monitorImg,
        alt: "Monitor and calculate Asset KPIs",
        description: "",
      },
    ],
  },
  {
    title: "Visualise Asset Integrity over Web view",
    item: [
      {
        image: visualImg,
        alt: "Visualise Asset Integrity over Web view 1",
        description: "",
      },
    ],
  },
  {
    title: "View trends online in real-time mode",
    item: [
      {
        image: viewImg,
        alt: "View trends online in real-time mode",
        description: "",
      },
    ],
  },
  {
    title: "Manage Work-Packages and Work-permits automatically",
    item: [
      {
        image: wpImg,
        alt: "Manage Work-Packages and Work-permits automatically",
        description: "",
      },
      {
        image: wpImg1,
        alt: "Manage Work-Packages and Work-permits automatically 1",
        description: "",
      },
    ],
  },
  {
    title: "Resource Management",
    item: [
      {
        image: rmImg,
        alt: "Resource Management 1",
        description: "",
      },
    ],
  },
  {
    title: "Shift Management",
    item: [
      {
        image: smImg,
        alt: "Shift Management",
        description: "",
      },
      {
        image: smImg1,
        alt: "Shift Management 1",
        description: "",
      },
      {
        image: smImg2,
        alt: "Shift Management 2",
        description: "",
      },
    ],
  },
  {
    title: "Shutdown Planning",
    item: [
      {
        image: sdpImg,
        alt: "Shutdown Planning",
        description: "",
      },
      {
        image: sdpImg1,
        alt: "Shutdown Planning",
        description: "",
      },
    ],
  },
  {
    title: "Isolation Management (LOTO – Lock out and Tag Out)",
    item: [
      {
        image: lotoImg,
        alt: "Isolation Management (LOTO – Lock out and Tag Out)",
        description: "",
      },
    ],
  },
  {
    title: "Web Based Visualization of Maintenance and Inspection Activities",
    item: [
      {
        image: wbvImg,
        alt: "Web Based Visualization of Maintenance and Inspection Activities",
        description:
          "View auto-generated real-time dashboards over web browsers (any mobile device), for all your maintenance and operations activities of plant.",
      },
      {
        image: wbvImg1,
        alt: "Web Based Visualization of Maintenance and Inspection Activities",
        description: "",
      },
      {
        image: wbvImg2,
        alt: "Web Based Visualization of Maintenance and Inspection Activities",
        description: "",
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

const Operations = () => {
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
            How COMOS looks for Operations and Maintenance
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ textAlign: "justify" }}
          >
            Same Database is used or so to say carry forward to Operations phase
            of process plant, with built-in features for Maintenance,
            Operations, Digital Operator Rounds, Dashboarding and Analytics.
            Below are some of the standard built-in features COMOS offers:
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

export default Operations;
