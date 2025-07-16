import { Box, Grid, Typography, Link, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <Box className={styles.footerContainer}>
      <Box className={styles.innerContainer}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, sm: 4, lg: 3.5 }}>
            <Typography variant="h6" fontWeight="bold">
              NM Technocrafts
            </Typography>
            <Box
              display={"flex"}
              flexDirection="column"
              justifyContent={"space-between"}
              gap={{ xs: 2, sm: 4, md: 12 }}
            >
              <Box display="flex" gap={1}>
                <IconButton
                  component="a"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                >
                  <XIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                >
                  <YouTubeIcon />
                </IconButton>
              </Box>
              <Box sx={{ display: "flex", gap: 1 }}>
                <Box
                  sx={{
                    width: "150px",
                    height: "150px",
                    border: "1px solid #282c34",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "1rem",
                    textAlign: "center",
                    background: "#bec0c6ff",
                    color: "white",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{ color: "inherit", fontWeight: 500 }}
                  >
                    Solution Partner
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "inherit", mt: 1, fontWeight: 500 }}
                  >
                    COMOS Industry Solutions
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "150px",
                    height: "150px",
                    border: "1px solid #282c34",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "1rem",
                    textAlign: "center",
                    cursor: "pointer",
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(
                      "https://www.siemens.com/in/en/products/automation/industry-software/plant-engineering-software-comos.html",
                      "_blank"
                    );
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: "var(--color-coral-interactive)",
                      fontWeight: 700,
                    }}
                  >
                    SIEMENS
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 8, lg: 8.5 }}>
            <Grid
              container
              spacing={2}
              display="flex"
              justifyContent="end"
              gap={5}
            >
              <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  NM Technocrafts
                </Typography>
                <Box display="flex" flexDirection="column" gap={1}>
                  <Link href="/siemens-comos" className={styles.link}>
                    ▶ SIEMENS COMOS
                  </Link>
                  <Link href="/asset-management" className={styles.link}>
                    ▶ How COMOS Looks for Asset Management and Design
                    Engineering
                  </Link>
                  <Link href="/operation-maintenance" className={styles.link}>
                    ▶ How COMOS looks for Operations and Maintenance
                  </Link>
                  <Link href="/operator-training" className={styles.link}>
                    ▶ Operator Training Simulator for Engineering and Operations
                    phase of Plant
                  </Link>
                  <Link href="/digital-operator-rounds" className={styles.link}>
                    ▶ Digital Operator Rounds / Mobile Worker
                  </Link>
                  <Link href="/iDB-plant-engineering" className={styles.link}>
                    ▶ Complete customised iDB for plant engineering
                  </Link>
                  <Link href="/training" className={styles.link}>
                    ▶ Training
                  </Link>
                </Box>
              </Grid>

              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Contact
                </Typography>
                <Box display="flex" flexDirection="column" gap={1}>
                  <Link href="/about-us" className={styles.link}>
                    ▶ About us
                  </Link>
                  <Link href="/contact-us" className={styles.link}>
                    ▶ Contact us
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Box mt={4} borderTop="1px solid #282c34" />

        <Box
          mt={2}
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          flexWrap="wrap"
          gap={2}
        >
          <Typography variant="body1">
            © NM Technocrafts 2025 | Crafting new technologies for you
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
