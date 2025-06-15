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
import TitleImageCard from "../../data/TitleImageCard";

const imageList1 = [
  { url: {img1}, alt: "PFD" },
];

const imageList2 = [
  { url: {img2}, alt: "P&ID" },
];
const imageList3 = [
  { url: {img3}, alt: "Functional Diagram" },
];
const imageList4 = [
  { url: {img4}, alt: "Cause and Effect Drawings" },
];
const imageList5 = [
  { url: {img5}, alt: "Power Distribution Diagram (SLD)" },
];
const imageList6 = [
  { url: {img6}, alt: "Detailed Control Schematics" },
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
          <Typography variant="h6" component="h1" gutterBottom>
            Intelligent and Interactive Drawings (2D) for:
          </Typography>

          <TitleImageCard title="Process Flow Diagram (PFD)" images={imageList1} />
          <TitleImageCard title="Piping and Instrumentation Diagram (P&ID)" images={imageList2} />
          <TitleImageCard title="Functional Diagram" images={imageList3} />
          <TitleImageCard title="Cause and Effect Drawings" images={imageList4} />
          <TitleImageCard title="Power Distribution Diagram (SLD)" images={imageList5} />
          <TitleImageCard title="Detailed Control Schematics" images={imageList6} />
        </Box>
      </Container>

      <Footer />
    </>
  );
};

export default DigitalTranx;
