import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Container,
  useMediaQuery,
} from "@mui/material";
import TopNav from "../../components/Navbar/TopNav/TopNav";
import SubNav from "../../components/Navbar/SubNav/SubNav";
import Footer from "../Footer/Footer";

const CiplaIndore = () => {
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

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box textAlign="center" mb={6}>
          <Typography variant="h6" component="h1" gutterBottom>
            CIPLA’S (INDORE – INDIA) – DIGITAL TWIN IN COMOS
          </Typography>
        </Box>

        <Box
          p={4}
          sx={{ backgroundColor: "#f9f9f9", borderRadius: 2, boxShadow: 3 }}
        >
          <Typography variant="body1" gutterBottom>
            • Our company WON the digital twin RFP against competition of
            HEXAGON and AVEVA
          </Typography>
          <Typography variant="body1" gutterBottom>
            • CIPLA’s INDORE – Unit 1 was chosen for DIGITAL TWIN project, which
            will now be rolled for all units globally
          </Typography>

          <Typography variant="body1" mt={2}>
            • Digitized following documents in COMOS
          </Typography>
          <List dense>
            <ListItem>
              <ListItemText primary="P&ID: ~206" />
            </ListItem>
            <ListItem>
              <ListItemText primary="SLD: ~89" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Electrical and Control Panel’s Circuit Wiring Diagrams: ~ 2890" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Uploaded and associated other plant documentation like: IQ, PQ, FAT, DQ, QP, SAT, URS, Datasheets, Manuals and such documents " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Established COMOS and SAP interface to fetch maintenance and Instrument calibration plans" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Add calibration plans on COMOS P&IDs" />
            </ListItem>
          </List>

          <Typography variant="body1" mt={2}>
            • Performed Laser Scanning of UNIT – I
          </Typography>

          <Typography variant="body1" mt={2}>
            • Prepared Intelligent 3D model in AutoCAD Plant 3D
          </Typography>

          <Typography variant="body1" mt={2}>
            • Created WalkInside VR model from the AutoCAD 3D model
          </Typography>
          <Typography variant="body1" mt={2}>
            • Linked COMOS Objects with WalkInside objects
          </Typography>
          <Typography variant="body1" mt={2}>
            • Created Intelligent Isometrics and linked them with COMOS Pipe
            branches
          </Typography>
          <Typography variant="body1" mt={2}>
            • Perform Slop verification and build AutoCAD LISP program to
            validate the pipeline slopes as per industry norms
          </Typography>
          <Typography variant="body1" mt={2}>
            • Created interactive Layouts in COMOS [new functionality build by
            our team], associated equipment, instruments on these layouts as
            required in GMP practise
          </Typography>
          <Typography variant="body1" mt={2}>
            • Entire digital twin of 1D, 2D and 3D over Web
          </Typography>
          <Typography variant="body1" mt={2}>
            • Added QP [Quality Plans] as periodically self-triggered document
            in COMOS with proper workflow
          </Typography>
          <Typography variant="body1" mt={2}>
            • Completed the above project in a span of 8 months with a team size
            of 10 engineers
          </Typography>
        </Box>
      </Container>

      <Footer />
    </>
  );
};

export default CiplaIndore;
