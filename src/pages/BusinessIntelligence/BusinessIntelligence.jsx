import { useState } from "react";
import {
  Box,
  CardMedia,
  Container,
  Dialog,
  DialogContent,
  Divider,
  Grid,
  IconButton,
  styled,
  Typography,
} from "@mui/material";
import Img1 from "../../assets/businessInt/businessImg1.png";
import Img2 from "../../assets/businessInt/businessImg2.png";
import Img3 from "../../assets/businessInt/businessImg3.png";
import CloseIcon from "@mui/icons-material/Close";

const StyledCardMedia = styled(CardMedia, {
  shouldForwardProp: (prop) =>
    prop !== "maxWidth" &&
    prop !== "paddingTop" &&
    prop !== "border" &&
    prop !== "height",
})(({ maxWidth, paddingTop, border, height }) => ({
  ...(maxWidth && { maxWidth }),
  ...(paddingTop && { paddingTop }),
  ...(border && { border }),
  ...(height && { height: height }),
  width: "100%",
  margin: "0 auto",
  borderRadius: "8px",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.03)",
  },
}));

// Wrapper with overlay effect
const ImageWithOverlay = ({ src, alt, height, onClick }) => (
  <Box
    sx={{
      position: "relative",
      cursor: "pointer",
      borderRadius: "8px",
      overflow: "hidden",
      "&:hover .overlay": {
        opacity: 1,
      },
    }}
    onClick={onClick}
  >
    <StyledCardMedia
      component="img"
      image={src}
      alt={alt}
      border="1px solid var(--color-primary-light)"
      sx={{
        height: height || "100%",
        objectFit: "contain",
        bgcolor: "#00000040",
      }}
    />
    <Box
      className="overlay"
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bgcolor: "rgba(0, 0, 0, 0.5)",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.1rem",
        fontWeight: 500,
        opacity: 0,
        transition: "opacity 0.3s ease",
        pointerEvents: "none",
      }}
    >
      🔍 Click to Zoom
    </Box>
  </Box>
);

const BusinessIntelligence = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (img) => {
    setSelectedImage(img);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };
  return (
    <Box
      sx={{ py: 6 }}
      id="business-intelligence"
      style={{ paddingTop: "110px" }}
    >
      <Container>
        <Box textAlign="center" mb={4}>
          <Typography
            variant="h4"
            fontWeight={700}
            color="var(--color-primary-light)"
          >
            BI [Business Intelligence] Layer with integrated Dashboards
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: "text.secondary", mt: 1 }}
          >
            Our Business Intelligence layer provides integrated dashboards for
            all data sources.
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
          <Box>
            <Grid container spacing={2} sx={{ mt: 2, ml: 0 }}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <ImageWithOverlay
                  src={Img1}
                  alt="Laser Scan 1"
                  height={{ xs: "200px", sm: "416px" }}
                  onClick={() => handleImageClick(Img1)}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Grid
                  container
                  spacing={2}
                  sx={{ gridTemplateRows: "repeat(2, 1fr)" }}
                >
                  <Grid size={12}>
                    <ImageWithOverlay
                      src={Img2}
                      alt="Laser Scan 2"
                      height="200px"
                      onClick={() => handleImageClick(Img2)}
                    />
                  </Grid>
                  <Grid size={12}>
                    <ImageWithOverlay
                      src={Img3}
                      alt="Laser Scan 3"
                      height="200px"
                      onClick={() => handleImageClick(Img3)}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>

        {/* Image Zoom Dialog */}
        <Dialog
          open={open}
          onClose={handleClose}
          maxWidth="md"
          sx={{ zIndex: 10000 }}
        >
          <DialogContent sx={{ position: "relative", p: 0 }}>
            <IconButton
              onClick={handleClose}
              sx={{ position: "absolute", top: 8, right: 8, zIndex: 1 }}
            >
              <CloseIcon />
            </IconButton>
            {selectedImage && (
              <Box
                component="img"
                src={selectedImage}
                alt="Full View"
                sx={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            )}
          </DialogContent>
        </Dialog>
      </Container>
    </Box>
  );
};

export default BusinessIntelligence;
