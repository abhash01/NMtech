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
import famImg from "../../assets/siemensComos/famImg.jpg";
import sopImg from "../../assets/siemensComos/sopImg.png";
import hseImg from "../../assets/siemensComos/hseImg.png";
import ctImg from "../../assets/siemensComos/ctImg.jpg";

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

const OperatorTraining = () => {
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
            Operator Training Simulator for Engineering and Operations phase of
            Plant
          </Typography>
          <Typography
            variant="body1"
            component="h2"
            sx={{ color: "var( --color-dark)" }}
            gutterBottom
            textAlign="center"
            fontWeight={400}
          >
            Easy to build scenarios, with record function. Add animations, gears
            and many more in light weighted 3D model to create training
            environment simulating real world cases. Merge 3D from any industry
            standard model file (E3D, SP3D, AutoCAD, Plant 3D, Solid Works,
            MicroStation, iModels, Step files, iGES files and such more).
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

export default OperatorTraining;
