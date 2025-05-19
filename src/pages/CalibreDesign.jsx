import React, { useEffect, useState } from "react";
import Header from "../components/Header/ScrollNav.jsx";
import Footer from "../pages/Footer/Footer.jsx";
import { Container, useMediaQuery } from "@mui/material";
import TopNav from "../components/Navbar/TopNav/TopNav.jsx";
import SubNav from "../components/Navbar/SubNav/SubNav.jsx";

const CalibreDesign = () => {
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
     if (isMobileView) {
       return "75px";
     }
     return isScrolled ? "78px" : "150px";
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
          background: "var(--color-secondary-light)",
        }}
      >
        <SubNav scrolledHeight={getScrolledHeight()} />
      </Container>
      <main style={{ padding: "10rem 2rem", textAlign: "center" }}>
        <h1>Calibre Design</h1>
      </main>
      <Footer />
    </>
  );
};

export default CalibreDesign;

// export const CalibreManufacturing = () => {
//   return (
//     <>
//       <Header />
//       <main style={{ padding: "20rem 2rem", textAlign: "center" }}>
//         <h1>Calibre Manufacturing</h1>
//       </main>
//       <Footer />
//     </>
//   );
// };

// export const Questa = () => {
//   return (
//     <>
//       <Header />
//       <main style={{ padding: "20rem 2rem", textAlign: "center" }}>
//         <h1>Questa</h1>
//       </main>
//       <Footer />
//     </>
//   );
// };

// export const Tessent = () => {
//   return (
//     <>
//       <Header />
//       <main style={{ padding: "20rem 2rem", textAlign: "center" }}>
//         <h1>Tessent</h1>
//       </main>
//       <Footer />
//     </>
//   );
// };

// export const Veloce = () => {
//   return (
//     <>
//       <Header />
//       <main style={{ padding: "20rem 2rem", textAlign: "center" }}>
//         <h1>Veloce</h1>
//       </main>
//       <Footer />
//     </>
//   );
// };

// export const Xpedition = () => {
//   return (
//     <>
//       <Header />
//       <main style={{ padding: "20rem 2rem", textAlign: "center" }}>
//         <h1>Xpedition</h1>
//       </main>
//       <Footer />
//     </>
//   );
// };

// export const AllICProducts = () => {
//   return (
//     <>
//       <Header />
//       <main style={{ padding: "20rem 2rem", textAlign: "center" }}>
//         <h1>All IC Products</h1>
//       </main>
//       <Footer />
//     </>
//   );
// };

// export const AllPCBSoftware = () => {
//   return (
//     <>
//       <Header />
//       <main style={{ padding: "20rem 2rem", textAlign: "center" }}>
//         <h1>All PCB Software</h1>
//       </main>
//       <Footer />
//     </>
//   );
// };

// export const AllICPackagingSoftware = () => {
//   return (
//     <>
//       <Header />
//       <main style={{ padding: "20rem 2rem", textAlign: "center" }}>
//         <h1>All IC Packaging Software</h1>
//       </main>
//       <Footer />
//     </>
//   );
// };
