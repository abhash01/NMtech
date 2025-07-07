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

const data = [
  {
    title: "",
    item: [
      {
        image: undefined,
        alt: "",
        description: "COMOS",
        subtitle: "",
        points: [
          "COMOS Basic – Platform Module",
          "COMOS FEED Module",
          "COMOS P&ID",
          "COMOS EI&C",
          "COMOS Logical",
          "COMOS DDMS",
          "COMOS Web",
          "COMOS Walkinside",
          "COMOS Mobile Worker",
        ],
      },
    ],
  },
  {
    title: "",
    item: [
      {
        image: undefined,
        alt: "",
        description: "Hexagon Solutions",
        subtitle: "",
        points: ["SPPID", "SPI", "SPEL"],
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

const Training = () => {
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
            Training
          </Typography>
          <Typography
            variant="body1"
            component="h2"
            sx={{ color: "var( --color-dark)" }}
            gutterBottom
            textAlign="center"
            fontWeight={400}
          >
            We provide trainings on following software solutions:
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

export default Training;
