import {
  Box,
  CardMedia,
  Container,
  Divider,
  Grid,
  styled,
  Typography,
} from "@mui/material";
import SlideInFromRight from "../../components/motions/SlideInFromRight";
import SlideInFromLeft from "../../components/motions/SlideInFromLeft";
import AnimatedArrow from "../../components/motions/AnimatedArrow";
import digitalTwinInfoModel from "../../assets/digitalTwin/digital-twin-info-model.png";
import digitalTwinInfoCycle from "../../assets/digitalTwin/digital-twin-info-cycle.png";
import digitalTwinPump from "../../assets/digitalTwin/digital-twin-pump.png";
import digitalProcessPiping from "../../assets/digitalTwin/process-piping.png";
import digitalElectricalInstrument from "../../assets/digitalTwin/electrical-instrument.png";
import digitalProjectManagement from "../../assets/digitalTwin/project-mgment.png";
import digitalCommission from "../../assets/digitalTwin/commission.png";
import digitalIntegratedAsset from "../../assets/digitalTwin/integrated-asset.png";
import digitalDashboard from "../../assets/digitalTwin/dashboard.png";
import digitalPaperless from "../../assets/digitalTwin/paperless.png";

const StyledCardMedia = styled(CardMedia, {
  shouldForwardProp: (prop) =>
    prop !== "maxWidth" && prop !== "paddingTop" && prop !== "border",
})(({ maxWidth, paddingTop, border }) => ({
  ...(maxWidth && { maxWidth }),
  ...(paddingTop && { paddingTop }),
  ...(border && { border }),
  width: "100%",
  height: "auto",
  margin: "0 auto",
  borderRadius: "8px",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.03)",
  },
}));

const DigitalTwin = () => {
  return (
    <Box
      sx={{ py: 6, backgroundColor: "var(--color-primary)" }}
      id="digital-twin"
      style={{ paddingTop: "100px" }}
    >
      <Container>
        <Box textAlign="center" mb={4}>
          <Typography
            variant="h4"
            fontWeight={700}
            color="var(--color-primary-light)"
          >
            Digital Twin – Services
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: "text.secondary", mt: 1 }}
          >
            Create Process plant digital twin with 1D, 2D and 3D data integrated
            in a single platform
          </Typography>
          <Divider
            sx={{
              width: "220px",
              height: "4px",
              backgroundColor: "var(--color-primary-light)",
              borderRadius: "2px",
              boxShadow: "0px 7px 11px 1px var(--color-primary-light)",
              margin: "1rem auto",
            }}
          />
        </Box>
        <Box sx={{ mb: 4 }}>
          <StyledCardMedia
            component="img"
            image={digitalTwinInfoModel}
            alt="Digital Twin"
            maxWidth="880px"
          />
          <AnimatedArrow size="3rem" direction="down" />
          <StyledCardMedia
            component="img"
            image={digitalTwinInfoCycle}
            alt="Digital Twin Cycle"
            paddingTop="1.5rem"
            maxWidth="640px"
          />
        </Box>
        <Box sx={{ mb: 4 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              gap: 2,
              mb: 2,
            }}
          >
            <AnimatedArrow size="1.5rem" direction="left" distance={10} />
            <Typography
              variant="h6"
              sx={{ color: "var(--color-primary-light)", fontWeight: 700 }}
            >
              Use of Single DB to gain the advantage.
            </Typography>
          </Box>
          <Grid container spacing={2} alignItems="center">
            <Grid size={{ xs: 12, sm: 6 }}>
              <Grid item xs={12}>
                <Typography variant="subtitle1" gutterBottom>
                  E.g. PUMP
                </Typography>

                <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                  Pump is required by Process
                </Typography>

                <Box component="ul" sx={{ pl: 3, mb: 2, color: "#555" }}>
                  <li>
                    Based on{" "}
                    <span style={{ color: "red", fontWeight: 600 }}>PUMP</span>{" "}
                    capacity,{" "}
                    <span style={{ color: "red" }}>
                      Motor kW <i>[child of pump]</i>
                    </span>{" "}
                    is automatically selected
                  </li>
                  <li>
                    Based on{" "}
                    <span style={{ color: "red", fontWeight: 600 }}>
                      Motor Capacity
                    </span>
                    ,
                    <ul
                      style={{ paddingLeft: "1.5rem", marginBlock: "0.5rem" }}
                    >
                      <li>
                        <span style={{ color: "#3399cc" }}>
                          Cable <i>(proper type and Size)</i>
                        </span>{" "}
                        is auto selected
                      </li>
                      <li>
                        Appropriate{" "}
                        <span style={{ color: "#3399cc", fontWeight: 600 }}>
                          Cable Gland
                        </span>
                        , matching cable size is also auto selected
                      </li>
                      <li>
                        <span style={{ color: "#00b894" }}>
                          MCC Feeder{" "}
                          <i>
                            (i.e. Switchgear capacity, Indicators, control and
                            protection functions and such)
                          </i>
                        </span>{" "}
                        is auto selected
                      </li>
                      <li>
                        <span style={{ color: "#cc7a00", fontStyle: "italic" }}>
                          PLC interface IOs and thereby PLC hardware,
                          inter-connecting cable
                        </span>{" "}
                        is auto-selected
                      </li>
                    </ul>
                  </li>
                  <li>
                    Any change in the PUMP requirement will highlight the
                    related changes and thereby{" "}
                    <span style={{ color: "red", fontWeight: 600 }}>
                      avoid mistakes, delays and costly re-work
                    </span>
                  </li>
                  <li>
                    <span style={{ color: "red", fontWeight: 600 }}>
                      Standardizing such requirements by means of Templates
                    </span>
                  </li>
                </Box>
              </Grid>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <StyledCardMedia
                component="img"
                image={digitalTwinPump}
                alt="Digital Twin Pump"
                maxWidth="440px"
                border="1px solid var(--color-primary-light)"
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ mb: 4 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              gap: 2,
              mb: 1,
            }}
          >
            <AnimatedArrow size="1.5rem" direction="left" distance={10} />
            <Typography
              variant="h6"
              sx={{ color: "var(--color-primary-light)", fontWeight: 700 }}
            >
              Engineering Design Documents – Integrated in One DB – One UI.
            </Typography>
          </Box>
          <SlideInFromRight
            title="Process, Mechanical and piping documents [intelligent form]"
            image={digitalProcessPiping}
          />
          <SlideInFromLeft
            title="Electrical and Instrumentation"
            image={digitalElectricalInstrument}
          />
          <SlideInFromRight
            title="Project Management, Procurement, 3D and 4D"
            image={digitalProjectManagement}
          />
          <SlideInFromLeft
            title="Commissioning and Start-up Management"
            image={digitalCommission}
          />
        </Box>
        <Box sx={{ mb: 4 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              gap: 2,
              mb: 1,
            }}
          >
            <AnimatedArrow size="1.5rem" direction="left" distance={10} />
            <Typography
              variant="h6"
              sx={{ color: "var(--color-primary-light)", fontWeight: 700 }}
            >
              Integrated Plant Maintenance and Operations – in One DB – One UI
            </Typography>
          </Box>
          <SlideInFromRight
            title="Integrated Asset Performance Management"
            image={digitalIntegratedAsset}
          />
          <SlideInFromLeft
            title="Dashboards and Visualization"
            image={digitalDashboard}
          />
          <SlideInFromRight
            title="Paperless operations and maintenance"
            image={digitalPaperless}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default DigitalTwin;
