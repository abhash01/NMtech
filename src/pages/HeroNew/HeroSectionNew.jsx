import { Container, Grid, Typography, Box } from "@mui/material";
import processImg from "../../assets/hero/process-industry.png";
import powerImg from "../../assets/hero/power-industry.jpg";
import chemicalsImg from "../../assets/hero/chemical-industry.jpg";
import oilGasImg from "../../assets/hero/oil-gas-industry.jpg";
import pharmaImg from "../../assets/hero/pharma-industry.jpg";

const imageBoxStyle = {
  position: "relative",
  width: "100%",
  height: "clamp(180px, 30vw, 200px)",
  overflow: "hidden",
  borderRadius: "4px",
};

const labelStyle = {
  position: "absolute",
  bottom: 0,
  width: "100%",
  backgroundColor: "rgba(96,125,139,0.8)",
  color: "#fff",
  padding: "8px 12px",
  fontSize: "1rem",
  transition: "background-color 0.3s ease",

  "&:hover": {
    backgroundColor: "var(--color-primary-light)",
    cursor: "pointer",
  },
};

const HeroSectionNew = () => {
  return (
    <Box
      sx={{
        py: 6,
        // minHeight: "600px",
        background:
          "linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-green-lighter) 30%, #ffffff 100%)",
        backgroundSize: "200% 200%",
        animation: "animateGradient 20s ease-in-out infinite",
        "@keyframes animateGradient": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {/* 30% Section: Heading and Description */}
          <Grid
            size={{ xs: 12, md: 4 }}
            item
            xs={12}
            md={4}
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontSize: "2rem",
                fontWeight: 400,
                color: "var(--color-primary)",
              }}
            >
              <Box component="span" fontWeight={500}>
                <Box
                  component="span"
                  sx={{
                    color: "transparent",
                    background: "linear-gradient(90deg, #FF9800, #FFC107)",
                    WebkitBackgroundClip: "text",
                    fontWeight: 700,
                  }}
                >
                  Solving
                </Box>{" "}
                your{" "}
                <Box
                  component="span"
                  sx={{
                    color: "transparent",
                    background: "linear-gradient(90deg, #FF9800, #FFC107)",
                    WebkitBackgroundClip: "text",
                    fontWeight: 700,
                  }}
                >
                  Challenges
                </Box>{" "}
                is our company's{" "}
                <Box
                  component="span"
                  sx={{
                    color: "transparent",
                    background: "linear-gradient(90deg, #FF9800, #FFC107)",
                    WebkitBackgroundClip: "text",
                    fontWeight: 700,
                  }}
                >
                  mission
                </Box>
              </Box>
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "var(--color-primary)", textAlign: "justify" }}
            >
              At our core, we deliver technology-driven solutions, specializing
              in the digital twin implementation, technology consulting, and
              engineering services for the process industry.
            </Typography>
          </Grid>
          {/* 70% Section: Images */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Grid container spacing={2}>
              {/* Left big image (Process Industry) */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{ ...imageBoxStyle, height: "100%", minHeight: "100%" }}
                >
                  <img
                    src={processImg}
                    alt="Process Industry"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <Box sx={{ ...labelStyle }}>Process Industry</Box>
                </Box>
              </Grid>

              {/* Right 2x2 images */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Box sx={imageBoxStyle}>
                      <img
                        src={powerImg}
                        alt="Power"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                      <Box sx={labelStyle}>Power</Box>
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Box sx={imageBoxStyle}>
                      <img
                        src={chemicalsImg}
                        alt="Chemicals"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                      <Box sx={labelStyle}>Chemicals</Box>
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Box sx={imageBoxStyle}>
                      <img
                        src={oilGasImg}
                        alt="Oil & Gas"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                      <Box sx={labelStyle}>Oil & Gas</Box>
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Box sx={imageBoxStyle}>
                      <img
                        src={pharmaImg}
                        alt="Pharmaceuticals"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                      <Box sx={labelStyle}>Pharmaceuticals</Box>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSectionNew;
