import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Container,
  useMediaQuery,
  Stack,
  Grid,
  styled,
} from "@mui/material";
import TopNav from "../../components/Navbar/TopNav/TopNav";
import SubNav from "../../components/Navbar/SubNav/SubNav";
import Footer from "../Footer/Footer";
import ExtensionIcon from "@mui/icons-material/Extension";
import InteractiveImg from "../../assets/siemensComos/InteractiveImg.png";
import PBFImg from "../../assets/siemensComos/PBFImg.png";
import PBFImg1 from "../../assets/siemensComos/PBFImg1.png";
import InteractivePFDImg from "../../assets/siemensComos/InteractivePFDImg.png";
import InteractivePFDImg1 from "../../assets/siemensComos/InteractivePFDImg1.png";
import PIDImg from "../../assets/siemensComos/P&IDImg.png";
import PIDImg1 from "../../assets/siemensComos/P&IDImg1.png";
import CauseImg from "../../assets/siemensComos/CauseImg.png";
import CauseImg1 from "../../assets/siemensComos/CauseImg1.png";
import SLDImg from "../../assets/siemensComos/SLDImg.png";
import SLDImg1 from "../../assets/siemensComos/SLDImg1.png";
import SLDImg2 from "../../assets/siemensComos/SLDImg2.png";
import SLDImg3 from "../../assets/siemensComos/SLDImg3.png";
import CDImg from "../../assets/siemensComos/CDImg.png";
import CDImg1 from "../../assets/siemensComos/CDImg1.png";
import CEImg from "../../assets/siemensComos/CEImg.png";
import CEImg1 from "../../assets/siemensComos/CEImg1.png";
import CEImg2 from "../../assets/siemensComos/CEImg2.png";
import DMImg from "../../assets/siemensComos/DMImg.png";
import DMImg1 from "../../assets/siemensComos/DMImg1.png";
import ILImg from "../../assets/siemensComos/ILImg.png";
import ILImg1 from "../../assets/siemensComos/ILImg1.png";
import DLImg from "../../assets/siemensComos/DLImg.png";
import PipImg from "../../assets/siemensComos/PipImg.png";
import PipImg1 from "../../assets/siemensComos/PipImg1.png";
import HookImg from "../../assets/siemensComos/HookImg.png";
import HookImg1 from "../../assets/siemensComos/HookImg1.png";
import WiringImg from "../../assets/siemensComos/WiringImg.png";
import JWImg from "../../assets/siemensComos/JWImg.png";
import QAImg from "../../assets/siemensComos/QAImg.png";
import QAImg1 from "../../assets/siemensComos/QAImg1.png";
import BEImg from "../../assets/siemensComos/BEImg.jpg";
import BEImg1 from "../../assets/siemensComos/BEImg1.png";

const data = [
  {
    title: "Interactive and Detailed Plant Hierarchy",
    item: [
      {
        image: InteractiveImg,
        alt: "Interactive Illustration",
        description: "",
      },
    ],
  },
  {
    title: "Process Block Flow Diagram",
    item: [
      {
        image: PBFImg,
        alt: "Process Block Flow Diagram",
        description: "Visualise process flow using Block flow diagram:",
      },
      {
        image: PBFImg1,
        alt: "Process Block Flow Diagram 1",
        description:
          "Import Process simulation data, documents, drawings, by built-in interface connector, as shown below:",
      },
    ],
  },
  {
    title: "PFD (Process Flow Diagram)",
    item: [
      {
        image: InteractivePFDImg,
        alt: "Interactive PFD",
        description: "Interactive smart PFD.",
      },
      {
        image: InteractivePFDImg1,
        alt: "Interactive PFD 1",
        description:
          "Select the asset and view / edit the Asset Data. E.g.: Pump selected on above PFD and opened as properties to view all the data associated with that pump",
      },
    ],
  },
  {
    title: "P&ID",
    item: [
      {
        image: PIDImg,
        alt: "P&ID",
        description:
          "From PFD itself, navigate to the respective P&ID of selected Asset. E.g.: Pump as shown below:",
      },
      {
        image: PIDImg1,
        alt: "P&ID 1",
        description: "",
      },
    ],
  },
  {
    title: "Cause and Effect Matrix",
    item: [
      {
        image: CauseImg,
        alt: "Cause and Effect Matrix",
        description:
          "From P&ID, to visualise the interlock logic for tripping conditions for the selected asset, navigate from P&ID to its respective “Cause and Effect Diagram”.",
      },
      {
        image: CauseImg1,
        alt: "Cause and Effect Matrix 1",
        description: "",
      },
    ],
  },
  {
    title: "SLDs",
    item: [
      {
        image: SLDImg,
        alt: "SLD",
        description:
          "From P&ID, want to view the Electrical Power Single Diagram for the Asset, navigate directly from P&ID. For E.g.: need to view the MCC powering the motor of the Pump, navigate directly from P&ID, as shown below:",
      },
      {
        image: SLDImg1,
        alt: "SLD 1",
        description: "",
      },
      {
        image: SLDImg2,
        alt: "SLD 2",
        description:
          "From SLD itself, need to check the overall Key line diagram, navigate from the MCC showing the motor, as shown below:",
      },
      {
        image: SLDImg3,
        alt: "SLD 3",
        description: "",
      },
    ],
  },
  {
    title: "Circuit Diagrams",
    item: [
      {
        image: CDImg,
        alt: "Circuit Diagram",
        description:
          "Want to check out the main transformer control circuit and detailed panel wiring, navigate from the SLD to detail circuit diagram:",
      },
      {
        image: CDImg1,
        alt: "Circuit Diagram 1",
        description: "",
      },
    ],
  },
  {
    title: "Cabinet Engineering",
    item: [
      {
        image: CEImg,
        alt: "Cabinet Engineering",
        description:
          "From circuit, now need to check the Panel GA, equipment placement, navigate from the panel circuit component to the Cabinet drawing, as shown below:",
      },
      {
        image: CEImg1,
        alt: "Cabinet Engineering 1",
        description: "",
      },
      {
        image: CEImg2,
        alt: "Cabinet Engineering 2",
        description:
          "Want to visualise the panel in 3D, click 3D icon on the menu of the cabinet diagram to visualise 3D panel:",
      },
    ],
  },
  {
    title: "Document Management",
    item: [
      {
        image: DMImg,
        alt: "Document Management",
        description:
          "COMOS has built-in document management system with the module of DDMS. COMOS DDMS (Data and Document Management) covers the overall functionality, that is required to handle asset data and asset documentation in a consistent way:",
        points: [
          "Data and Document Bulk Import",
          "Central management of asset data",
          "Audit trail history incl. objects and document versioning and revisioning",
          "Central revisioning of documents in PDF-A-format",
          "Workflow-based review and approval of documents",
          "Different search options (Fulltext, hierarchical, metadata-based)",
          "Segregation of project- and lifecycle-documentation",
          "Document transmittal and sharing",
          "Electronic Signature",
        ],
      },
      {
        image: DMImg1,
        alt: "Document Management 1",
        description: "",
      },
    ],
  },
  {
    title: "Interactive List Reports",
    item: [
      {
        image: ILImg,
        alt: "Interactive List Reports",
        description:
          "List reports are available at any plant hierarchy. Use the default reports to list out the assets as required:",
      },
      {
        image: ILImg1,
        alt: "Interactive List Reports 1",
        description: "",
      },
    ],
  },
  {
    title: "Datasheets and List report (Automated)",
    item: [
      {
        image: DLImg,
        alt: "Datasheets and List report (Automated)",
        description:
          "Interactive datasheet. Every data (attribute) shown on datasheet is editable, even re-importable from MS Excel:",
      },
    ],
  },
  {
    title: "Piping Isometrics",
    item: [
      {
        image: PipImg,
        alt: "Piping Isometrics",
        description:
          "Isometrics can be created in COMOS or same can be imported from 3D modelling solution. From P&ID, say e.g.: suction pipeline of pump, want to check the Isometric of the pipeline, directly navigate to Isometric from P&ID, as shown below:",
      },
      {
        image: PipImg1,
        alt: "Piping Isometrics 1",
        description:
          "MTO parts are objects of the pipe run, as seen in the navigator (plant hierarchy) from below image.",
      },
    ],
  },
  {
    title: "Interactive Hook-Ups",
    item: [
      {
        image: HookImg,
        alt: "Interactive Hook-Ups",
        description:
          "From P&ID, you want to see the “Instrument Hook-Up Drawing”, select the instrument on P&ID, use navigate option, as shown below:",
      },
      {
        image: HookImg1,
        alt: "Interactive Hook-Ups 1",
        description: "",
      },
    ],
  },
  {
    title: "Loop Wiring Drawings",
    item: [
      {
        image: WiringImg,
        alt: "Loop Wiring Drawings",
        description: "Navigate to Instrument Loop Diagram from P&ID itself:",
      },
    ],
  },
  {
    title: "JB Schedule and Termination Drawings",
    item: [
      {
        image: JWImg,
        alt: "JB Schedule and Termination Drawings",
        description:
          "Navigate to Terminal Strip of JB from Loop drawing to view the detailed termination report, as shown below:",
      },
    ],
  },
  {
    title: "Automated QA/QC checks",
    item: [
      {
        image: QAImg,
        alt: "Automated QA/QC checks",
        description:
          "Define your own rules to check the data, validate the content and such, as shown below:",
      },
      {
        image: QAImg1,
        alt: "Automated QA/QC checks",
        description: "",
      },
    ],
  },
  {
    title: "Bulk Export of Drawings to PDF, AutoCAD and Revision Printer",
    item: [
      {
        image: BEImg,
        alt: "Bulk Export of Drawings to PDF, AutoCAD and Revision Printer",
        description: "",
      },
      {
        image: BEImg1,
        alt: "Bulk Export of Drawings to PDF, AutoCAD and Revision Printer",
        description: "",
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

const AssetManagement = () => {
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

      <Container maxWidth="lg" sx={{ py: 6, paddingInline: "1rem !important" }}>
        <Box>
          <Typography
            variant="h5"
            component="h2"
            sx={{ color: "var( --color-primary-light)" }}
            gutterBottom
            textAlign="center"
            fontWeight={600}
          >
            How COMOS Looks for Asset Management and Design Engineering
          </Typography>

          <Grid container spacing={2} sx={{ marginTop: "1rem" }}>
            {data.map((section, index) => (
              <React.Fragment key={index}>
                <Grid size={{ xs: 12 }}>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    sx={{ mt: 2 }}
                  >
                    <ExtensionIcon
                      fontSize="small"
                      sx={{ color: "var(--color-dark)" }}
                    />
                    <Typography
                      variant="h6"
                      component="h6"
                      sx={{ color: "var(--color-dark)" }}
                      fontWeight={600}
                      gutterBottom
                    >
                      {section.title}
                    </Typography>
                  </Stack>
                </Grid>

                {section.item.map((imgItem, i) => (
                  <Grid
                    size={{ xs: 12 }}
                    key={i}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    {imgItem.description && (
                      <Typography
                        variant="body1"
                        sx={{
                          color: "var(--color-dark)",
                          mt: 2,
                          fontWeight: 500,
                          textAlign: "center",
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
                          <li key={idx}>
                            <Typography variant="body2" component="span">
                              {point}
                            </Typography>
                          </li>
                        ))}
                      </Box>
                    )}
                    <ImageCard
                      component="img"
                      src={imgItem.image}
                      alt={imgItem.alt}
                      sx={{ marginTop: "1rem", maxWidth: { xs: "90%", sm: "80%", md: "70%"} }}
                    />
                  </Grid>
                ))}
              </React.Fragment>
            ))}
          </Grid>
        </Box>
      </Container>

      <Footer />
    </>
  );
};

export default AssetManagement;
