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
    ],
  },
  {
    title: "",
    item: [
      {
        image: inspImg,
        alt: "Inspector or Maintenance image",
        description: "Inspector or Maintenance In-charge / Head",
      },
    ],
  },
  {
    title: "",
    item: [
      {
        image: scanImg,
        alt: "Inspector or Maintenance image",
        description:
          "Scan (using QR/Bar Code or AR image recognition) to Open Asset",
      },
    ],
  },
  {
    title: "",
    item: [
      {
        image: checkImg,
        alt: "Checklist for Operator img",
        description: "Checklist for Operator",
        points: [
          "Design your own checklist",
          "Link and bring check list from ERP application like: SAP or CAE application like COMOS",
        ],
      },
    ],
  },
  {
    title: "",
    item: [
      {
        image: sensorImg,
        alt: "Sensor img",
        description:
          "View Real-Time Sensor Data from DCS / PLC or Data Historian",
        points: [
          "Application can be connected to any control system via OPC-UA connector, to bring out the real-time data with correct measurement units on Operators tablet / Helmet / HoloLens",
        ],
      },
    ],
  },
  {
    title: "",
    item: [
      {
        image: sensorImg1,
        alt: "Sensor img1",
        description: "",
      },
    ],
  },
  {
    title: "",
    item: [
      {
        image: arImg,
        alt: "AR and GPS img",
        description: "AR and GPS based Navigation",
      },
    ],
  },
  {
    title: "",
    item: [
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

const OperatorRounds = () => {
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
        {/* <SubNav scrolledHeight={getScrolledHeight()} /> */}
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
            Digital Operator Rounds / Mobile Worker
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
              </React.Fragment>
            ))}
          </Grid>
        </Box>
      </Container>

      <Footer />
    </>
  );
};

export default OperatorRounds;
