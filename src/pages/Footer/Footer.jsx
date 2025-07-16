import { Box, Grid, Typography, Link, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import styles from "./Footer.module.scss";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useNavigate } from "react-router-dom";

const nmLinks = [
  { label: "SIEMENS COMOS", url: "/siemens-comos" },
  {
    label: "How COMOS Looks for Asset Management and Design Engineering",
    url: "/asset-management",
  },
  {
    label: "How COMOS looks for Operations and Maintenance",
    url: "/operation-maintenance",
  },
  {
    label:
      "Operator Training Simulator for Engineering and Operations phase of Plant",
    url: "/operator-training",
  },
  {
    label: "Digital Operator Rounds / Mobile Worker",
    url: "/digital-operator-rounds",
  },
  {
    label: "Complete customised iDB for plant engineering",
    url: "/iDB-plant-engineering",
  },
  { label: "Training", url: "/training" },
];

const contactLinks = [
  { label: "About us", url: "/about-us" },
  { label: "Contact us", url: "/contact-us" },
];

const partnerBoxes = [
  {
    title: "Solution Partner",
    subtitle: "COMOS Industry Solutions",
    bg: "#aaacb047",
    textColor: "white",
    clickable: false,
  },
  {
    title: "SIEMENS",
    subtitle: null,
    onClick: () =>
      window.open(
        "https://www.siemens.com/in/en/products/automation/industry-software/plant-engineering-software-comos.html",
        "_blank"
      ),
    textColor: "var(--color-coral-interactive)",
    clickable: true,
  },
];

const Footer = () => {
  const navigate = useNavigate();
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
                  className={styles.iconButton}
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                  className={styles.iconButton}
                >
                  <XIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                  className={styles.iconButton}
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                  className={styles.iconButton}
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                  className={styles.iconButton}
                >
                  <YouTubeIcon />
                </IconButton>
              </Box>
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                {partnerBoxes.map((box, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: "150px",
                      height: "150px",
                      border: "1px solid var(--color-primary)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "1rem",
                      textAlign: "center",
                      background: box.bg || "transparent",
                      color: box.textColor || "inherit",
                      cursor: box.clickable ? "pointer" : "default",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        boxShadow: box.clickable
                          ? "inset 0 0 10px 6px rgba(0, 0, 0, 0.2)"
                          : "none",
                      },
                    }}
                    onClick={box.onClick}
                  >
                    <Typography
                      variant={box.subtitle ? "body1" : "h6"}
                      sx={{
                        fontWeight: 500,
                        lineHeight: 1.2,
                        color: "inherit",
                      }}
                    >
                      {box.title}
                    </Typography>

                    {box.subtitle && (
                      <Typography
                        variant="body1"
                        sx={{
                          mt: 1,
                          fontWeight: 500,
                          lineHeight: 1.2,
                          color: "inherit",
                        }}
                      >
                        {box.subtitle}
                      </Typography>
                    )}
                  </Box>
                ))}
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
                  {nmLinks.map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 1,
                        cursor: "pointer",
                      }}
                      onClick={() => navigate(item.url)}
                    >
                      <ArrowRightIcon
                        fontSize="small"
                        sx={{
                          mt: 0.5,
                        }}
                      />
                      <Box variant="body1" className={styles.link}>
                        {item.label}
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Grid>

              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Contact
                </Typography>
                <Box display="flex" flexDirection="column" gap={1}>
                  {contactLinks.map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 1,
                        cursor: "pointer",
                      }}
                      onClick={() => navigate(item.url)}
                    >
                      <ArrowRightIcon
                        fontSize="small"
                        sx={{
                          mt: 0.5,
                        }}
                      />
                      <Box variant="body1" className={styles.link}>
                        {item.label}
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Box mt={4} borderTop="1px solid var(--color-primary)" />

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
