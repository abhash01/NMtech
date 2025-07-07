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
    ],
  },
  {
    title: "",
    item: [
      {
        image: cpmImg1,
        alt: "Complete Project Management Image1",
        description: "",
        subtitle: "",
      },
    ],
  },
  {
    title: "",
    item: [
      {
        image: cpmImg2,
        alt: "Complete Project Management Image2",
        description: "",
        subtitle: "",
      },
    ],
  },
  {
    title: "",
    item: [
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
    ],
  },
  {
    title: "",
    item: [
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
    ],
  },
  {
    title: "",
    item: [
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

          <Grid container spacing={2} sx={{ marginTop: "1rem" }}>
            {data.map((section, index) => (
              <React.Fragment key={index}>
                {/* Section Title */}
                {section.title && (
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
                )}

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
                    <Box sx={{ marginLeft: { xs: "0", md: "15%" } }}>
                      {imgItem.description && (
                        <Typography
                          variant="h6"
                          sx={{
                            color: "var(--color-dark)",
                            mt: 2,
                            fontWeight: 600,
                            // textAlign: "center",
                          }}
                        >
                          » {imgItem.description}
                        </Typography>
                      )}

                      {imgItem.subtitle && (
                        <Typography
                          variant="body1"
                          sx={{
                            color: "var(--color-dark)",
                            mt: 1,
                            fontWeight: 600,
                            marginLeft: { xs: "0", md: "2%" },
                          }}
                        >
                          → {imgItem.subtitle}
                        </Typography>
                      )}

                      {imgItem.points && imgItem.points.length > 0 && (
                        <Box
                          component="ul"
                          sx={{
                            pl: 3,
                            mb: 2,
                            color: "var(--color-dark)",
                            maxWidth: "70%",
                            marginLeft: { xs: "0", md: "5%" },
                          }}
                        >
                          {imgItem.points.map((point, index) =>
                            typeof point === "string" ? (
                              <li key={index}>
                                <Typography variant="body2">{point}</Typography>
                              </li>
                            ) : (
                              <li key={index}>
                                <Typography variant="body2" fontWeight={500}>
                                  {point.text}
                                </Typography>
                                <Box component="ul" sx={{ pl: 3 }}>
                                  {point.subpoints.map((sub, subIndex) => (
                                    <li key={subIndex}>
                                      <Typography variant="body2">
                                        {sub}
                                      </Typography>
                                    </li>
                                  ))}
                                </Box>
                              </li>
                            )
                          )}
                        </Box>
                      )}
                    </Box>

                    {imgItem.table && imgItem.table}

                    {imgItem.image && imgItem.alt && (
                      <ImageCard
                        component="img"
                        src={imgItem.image}
                        alt={imgItem.alt}
                        sx={{
                          marginTop: "1rem",
                          maxWidth: { xs: "90%", sm: "80%", md: "70%" },
                          marginInline: "auto",
                        }}
                      />
                    )}
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

export default PlantEngg;
