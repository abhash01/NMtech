import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
  Divider,
} from "@mui/material";
import styles from "../MainSection/MainSection.module.scss";
import { useState } from "react";
import { Add, Remove } from "@mui/icons-material";

const accordionData = [
  {
    title: "Digitize below plant documents in Intelligent format",
    points: [
      "BFD [Block Flow Diagram] of overall process",
      "PFD [Process Flow Diagrams]",
      "P&ID [Piping and Instrumentation Diagrams]",
      "FLD [Fluidics Diagrams] i.e. Hydraulic and Pneumatic circuits",
      "SLD [Electrical power distribution Single Line Diagram]",
      "ECD [Electrical Circuit Diagrams]",
      "CBD [Electrical Cable Block Diagram] indicating the cable paths throughout the plant",
      "Instrument Hook-Ups",
      "ILD [Instrument Loop Diagrams]",
      "CWD [Control cabinets Wiring Diagrams]",
      "Cabinet GA",
      "JB Termination",
      "FGS [Fire and Gas System] indicating the placement, connection, termination of Fire and Gas Sensors, control system and Alarming points",
      "FFL [Fire Fighting Layouts] including P&IDs and controls",
      "Plant Layouts [Equipment layout, Man-Material movement layout, Fire-Escape layout]",
    ],
  },
  {
    title:
      "With above digitized documents below reports are auto-generated and required data is uploaded",
    points: [
      "PBS [Process Breakdown Structure] – plant hierarchy from process viewpoint",
      "ABS [Area Breakdown Structure] – Plant layout based hierarchy",
      "Equipment list with individual equipment’s nozzle list",
      "Pipeline List [Main and branch with schedule and other process parameters]",
      "Area Line list [layout based pipeline list]",
      "Manual Valve list",
      "Pipeline component list",
      "Special part list",
      "TIE-IN point list [interface points with various package units]",
      "Instrument Index",
      "IO List",
      "Fire Gas loop list",
      "Electrical consumer list",
      "JB List",
      "Cable list",
      "HV / MV / LV panel list",
      "Control / Marshalling Cabinet list",
      "Hook-Up list for Instrument and Electrical Asset",
      "Electrical lighting fixture list",
      "PA [Public Address] system list",
      "Call points list",
      "Safety showers and other safety component list",
    ],
  },
  {
    title: "Other Digitization Tasks",
    points: [
      "Digitize Datasheets for various Assets",
      "Associate all assets with layouts and 3D model for bi-directional navigation and visualization",
      "Upload and link other required documents for Assets as per ISO standard requirements",
    ],
  },
  {
    title: "MOC [Management Of Change]",
    points: [
      "Support in managing the plant changes with process driven approach",
    ],
  },
];

const Digitization = () => {
  const [expanded, setExpanded] = useState(
    accordionData.map((_, index) => index)
  );

  const handleChange = (index) => (_, isExpanded) => {
    setExpanded((prev) =>
      isExpanded ? [...prev, index] : prev.filter((i) => i !== index)
    );
  };
  return (
    <Box
      className={styles.mainSectionContainer}
      id="digitization"
      style={{ paddingTop: "110px", backgroundColor: "var(--color-primary)" }}
    >
      <Box textAlign="center" mb={8}>
        <Typography
          variant="h4"
          fontWeight={700}
          color="var(--color-primary-light)"
        >
          Digitization of Plant Documentation
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "text.secondary", mt: 1 }}>
          Digitize all your plant documents in one database and access them
          seamlessly over any device.
        </Typography>
        <Divider
          sx={{
            width: "220px",
            height: "4px",
            backgroundColor: "var(--color-primary-light)",
            borderRadius: "2px",
            boxShadow: "0px 7px 11px 1px var(--color-primary-light)",
            margin: "1rem auto",
          }}
        />
      </Box>
      <Box>
        <Box className={styles.accordionWrapper}>
          {accordionData.map((item, index) => (
            <Accordion
              elevation={0}
              key={index}
              expanded={expanded.includes(index)}
              onChange={handleChange(index)}
              TransitionProps={{ timeout: 0 }}
              className={styles.accordion}
            >
              <AccordionSummary
                expandIcon={
                  <>
                    {expanded.includes(index) ? (
                      <Remove fontSize="large" />
                    ) : (
                      <Add fontSize="large" />
                    )}
                  </>
                }
                className={styles.accordionSummary}
              >
                <Typography variant="h6" className={styles.accordionTitle}>
                  {item.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails className={styles.accordionDetails}>
                <Typography className={styles.accordionDescription}>
                  {item.description}
                </Typography>
                <ul className={styles.accordionList}>
                  {item.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Digitization;
