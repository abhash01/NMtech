import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Container,
  useMediaQuery,
  CardMedia,
} from "@mui/material";
import TopNav from "../../components/Navbar/TopNav/TopNav";
import SubNav from "../../components/Navbar/SubNav/SubNav";
import Footer from "../Footer/Footer";
import img1 from "../../assets/images/Picture5.png";
import img2 from "../../assets/images/Picture6.png";
import img3 from "../../assets/images/Picture7.png";
import img4 from "../../assets/images/Picture8.png";
import img5 from "../../assets/images/Picture9.png";
import img6 from "../../assets/images/Picture10.png";
import img7 from "../../assets/images/Picture11.png";
import img8 from "../../assets/images/Picture12.png";
import img9 from "../../assets/images/Picture13.png";
import img10 from "../../assets/images/Picture14.png";
import img11 from "../../assets/images/Picture15.png";
import img12 from "../../assets/images/Picture16.png";
import img13 from "../../assets/images/Picture17.png";
import img14 from "../../assets/images/Picture18.png";
import img15 from "../../assets/images/Picture19.png";
import img16 from "../../assets/images/Picture20.png";
import TitleImageCard from "../../data/TitleImageCard";

const imageList1 = [
  { url: img1, alt: "PFD" },
];
const imageList2 = [
  { url: img2, alt: "P&ID" },
];
const imageList3 = [
  { url: img3, alt: "Functional Diagram" },
];
const imageList4 = [
  { url: img4, alt: "Cause and Effect Drawings" },
];
const imageList5 = [
  { url: img5, alt: "Power Distribution Diagram (SLD)" },
];
const imageList6 = [
  { url: img6, alt: "Detailed Control Schematics" },
];
const imageList7 = [
  { url: img7, alt: "Cabinet GA" },
];
const imageList8 = [
  { url: img8, alt: "Hydraulic Schematics" },
];
const imageList9 = [
  { url: img9, alt: "By Laser Scanning" },
  { url: img10, alt: "By Laser Scanning" },
  { url: img11, alt: "By Laser Scanning" },
];
const imageList10 = [
  { url: img12, alt: "By Photogrammetry" },
  { url: img13, alt: "By Photogrammetry" },
];
const imageList11 = [
  { url: img14, alt: "Smart 3D model conversion" },
  { url: img15, alt: "Smart 3D model conversion" },
];
const imageList12 = [
  { url: img16, alt: "OTS" },
];

const DigitalTranx = () => {
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
          <Typography variant="h5" component="h1" gutterBottom>
            Intelligent and Interactive Drawings (2D) for:
          </Typography>

          <TitleImageCard title="Process Flow Diagram (PFD)" images={imageList1} />
          <TitleImageCard title="Piping and Instrumentation Diagram (P&ID)" images={imageList2} />
          <TitleImageCard title="Functional Diagram" images={imageList3} />
          <TitleImageCard title="Cause and Effect Drawings" images={imageList4} />
          <TitleImageCard title="Power Distribution Diagram (SLD)" images={imageList5} />
          <TitleImageCard title="Detailed Control Schematics" images={imageList6} />
          <TitleImageCard title="Cabinet GA" images={imageList7} />
          <TitleImageCard title="Hydraulic Schematics" images={imageList8} />
          <TitleImageCard title="By Laser Scanning" images={imageList9} />
          <TitleImageCard title="By Photogrammetry" images={imageList10} />
          <TitleImageCard title="Smart 3D model conversion" images={imageList11} />
          <TitleImageCard title="3D Walkthrough and Operator Training Simulator (OTS)" images={imageList12} />
        </Box>
      </Container>

      <Footer />
    </>
  );
};

export default DigitalTranx;
