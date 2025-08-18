import {
  Box,
  Typography,
  Container,
  Stack,
  Grid,
  styled,
} from "@mui/material";
import ExtensionIcon from "@mui/icons-material/Extension";
import ComosImage from "../../assets/siemensComos/Picture1.jpg";
import HolisticImage from "../../assets/siemensComos/holisticImg.png";
import FeatureTable from "./FeatureTable ";
import DesignDocsTable from "./DesignDocsTable ";
import MainLayout from "../layouts/MainLayout";

const ImageCard = styled(Box)(({ theme }) => ({
  width: "100%",
  height:"auto",
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: "0px 6px 24px rgba(0, 0, 0, 0.12)",
  border: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
  objectFit: "contain",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  cursor: "pointer",

  "&:hover": {
    transform: "scale(1.03)",
    boxShadow: "0px 10px 32px rgba(0, 0, 0, 0.2)",
  },
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

          <Grid container spacing={2} sx={{ marginTop: "1rem" }}>
            <Grid size={12}>
              <Stack direction="row" alignItems="center" spacing={1}>
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
                  What is Comos?
                </Typography>
              </Stack>

              <Typography
                variant="body1"
                sx={{ color: "var(--color-dark)", marginLeft: "2rem" }}
              >
                COMOS is abbreviated form for <b>COM</b>ponent <b>O</b>bject{" "}
                <b>S</b>tructure. It is a web-based server, an integrated
                software solution based on Object Oriented Programming. Flat
                Database (without RDMS) making it most suitable for remote
                access without compromising on performance.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }} sx={{ display: "flex", justifyContent: "center" }}>
              <ImageCard
                component="img"
                src={ComosImage}
                alt="COMOS Illustration"
                sx={{ marginTop: "1rem", }}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }} sx={{ display: "flex", justifyContent: "center" }}>
              <ImageCard
                component="img"
                src={HolisticImage}
                alt="HOLISTIC Illustration"
                sx={{ marginTop: "1rem", }}
              />
            </Grid>

            <Grid size={12} sx={{ marginTop: "3rem" }}>
              <Stack direction="row" alignItems="center" spacing={1}>
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
                  What are unique features of COMOS:
                </Typography>
              </Stack>
            </Grid>
            <Grid size={12}>
              <FeatureTable />
            </Grid>
            <Grid size={12} sx={{ marginTop: "3rem" }}>
              <Stack direction="row" alignItems="center" spacing={1}>
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
                  Deliverables in COMOS:
                </Typography>
              </Stack>
            </Grid>
            <Grid size={12}>
              <DesignDocsTable />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </MainLayout>
  );
};

export default SiemensComos;
