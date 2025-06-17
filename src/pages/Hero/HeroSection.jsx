import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import styles from "./HeroSection.module.scss";
import { heroSectionData } from "../../data";

const HeroSection = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <>
      <Box className={styles.heroBackground}>
        <Box className={styles.heroContainer} display={isMobile ? "none" : ""}>
          <Grid container>
            <Grid size={7}>
              <Box>
                <Typography
                  variant="h3"
                  color={heroSectionData.colors.primary}
                  pb={2}
                >
                  {heroSectionData.title}
                </Typography>
                <Typography
                  variant="h6"
                  fontSize="1rem"
                  color={heroSectionData.colors.primary}
                  pr={7.25}
                >
                  {heroSectionData.description}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box
        className={styles.heroContainer}
        display={isMobile ? "" : "none"}
        bgcolor={isMobile ? heroSectionData.colors.primary : ""}
      >
        <Grid container>
          <Grid size={12}>
            <Box>
              <Typography
                variant="h4"
                color={heroSectionData.colors.primaryLight}
                pb={2}
              >
                {heroSectionData.title}
              </Typography>
              <Typography
                variant="h6"
                fontSize="1rem"
                color={heroSectionData.colors.primaryLight}
              >
                {heroSectionData.description}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default HeroSection;
