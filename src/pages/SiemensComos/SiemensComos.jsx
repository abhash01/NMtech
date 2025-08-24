import {
  Box,
  Typography,
  Container,
  Stack,
  Grid,
  styled,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  CardContent,
  Card,
  Divider,
} from "@mui/material";
import ComosImage from "../../assets/siemensComos/Picture1.jpg";
import HolisticImage from "../../assets/siemensComos/holisticImg.png";
import FeatureTable from "./FeatureTable ";
import DesignDocsTable from "./DesignDocsTable ";
import MainLayout from "../layouts/MainLayout";
import { ExpandMore } from "@mui/icons-material";

const ImageCard = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "auto",
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: "0px 6px 24px rgba(0, 0, 0, 0.12)",
  border: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
  objectFit: "contain",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  cursor: "pointer",

  // "&:hover": {
  //   transform: "scale(1.03)",
  //   boxShadow: "0px 10px 32px rgba(0, 0, 0, 0.2)",
  // },
}));

const SiemensComos = () => {
  return (
    <MainLayout>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box>
          <Typography
            variant="h5"
            component="h2"
            sx={{ color: "var( --color-primary-light)" }}
            gutterBottom
            textAlign="center"
            fontWeight={600}
          >
            Siemens Comos
          </Typography>
          <Divider
            sx={{
              width: "280px",
              height: "4px",
              backgroundColor: "var(--color-primary-light)",
              margin: "1rem auto",
              borderRadius: "2px",
              boxShadow: "0px 7px 11px 1px var(--color-primary-light)",
            }}
          />

          <Card
            sx={{
              height: "100%",
              borderRadius: 3,
              boxShadow: 4,
              mt: 4,
              transition: "0.3s",
              color: "var( --color-primary)",
              bgcolor: "var(--color-primary-light)",
              "&:hover": { boxShadow: 8 },
            }}
          >
            <CardContent>
              <Accordion
                defaultExpanded
                disableGutters
                sx={{
                  boxShadow: "none",
                  borderBottom: "1px solid var(--color-primary)",
                  bgcolor: "transparent",
                  color: "var(--color-primary)",
                  "&:last-of-type": {
                    borderBottom: "none",
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMore sx={{ color: "var(--color-primary)" }} />
                  }
                >
                  <Typography fontWeight={500}>What is Comos?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    variant="body1"
                    sx={{ color: "var(--color-primary)" }}
                  >
                    COMOS is abbreviated form for <b>COM</b>ponent <b>O</b>
                    bject <b>S</b>tructure. It is a web-based server, an
                    integrated software solution based on Object Oriented
                    Programming. Flat Database (without RDMS) making it most
                    suitable for remote access without compromising on
                    performance.
                  </Typography>
                  <Grid container spacing={2} sx={{ marginTop: "1rem" }}>
                    <Grid
                      size={{ xs: 12, sm: 6 }}
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      <ImageCard
                        component="img"
                        src={ComosImage}
                        alt="COMOS Illustration"
                        sx={{ marginTop: "1rem" }}
                      />
                    </Grid>
                    <Grid
                      size={{ xs: 12, sm: 6 }}
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      <ImageCard
                        component="img"
                        src={HolisticImage}
                        alt="HOLISTIC Illustration"
                        sx={{ marginTop: "1rem" }}
                      />
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </CardContent>
          </Card>

          <Card
            sx={{
              height: "100%",
              borderRadius: 3,
              boxShadow: 4,
              transition: "0.3s",
              color: "var( --color-primary)",
              bgcolor: "var(--color-primary-light)",
              mt: 2,
              "&:hover": { boxShadow: 8 },
            }}
          >
            <CardContent>
              <Accordion
                disableGutters
                sx={{
                  boxShadow: "none",
                  borderBottom: "1px solid var(--color-primary)",
                  bgcolor: "transparent",
                  color: "var(--color-primary)",
                  "&:last-of-type": {
                    borderBottom: "none",
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMore sx={{ color: "var(--color-primary)" }} />
                  }
                >
                  <Typography fontWeight={500}>
                    What are unique features of COMOS:
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <FeatureTable />
                </AccordionDetails>
              </Accordion>
            </CardContent>
          </Card>

          <Card
            sx={{
              height: "100%",
              borderRadius: 3,
              boxShadow: 4,
              transition: "0.3s",
              color: "var( --color-primary)",
              bgcolor: "var(--color-primary-light)",
              mt: 2,
              "&:hover": { boxShadow: 8 },
            }}
          >
            <CardContent>
              <Accordion
                disableGutters
                sx={{
                  boxShadow: "none",
                  borderBottom: "1px solid var(--color-primary)",
                  bgcolor: "transparent",
                  color: "var(--color-primary)",
                  "&:last-of-type": {
                    borderBottom: "none",
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMore sx={{ color: "var(--color-primary)" }} />
                  }
                >
                  <Typography fontWeight={500}>
                    Deliverables in COMOS:
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <DesignDocsTable />
                </AccordionDetails>
              </Accordion>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </MainLayout>
  );
};

export default SiemensComos;
