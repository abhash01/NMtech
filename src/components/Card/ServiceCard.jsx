import { Box, Typography, Fade } from "@mui/material";
import { useState } from "react";

const ServiceCard = ({ icon, title, targetId }) => {
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        gap: 2,
        p: 2,
        border: "1px solid #e0e0e0",
        height: "120px",
        borderRadius: "12px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.06)",
        transition: "transform 0.3s ease",
        cursor: "pointer",
        overflow: "hidden",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      {/* Icon */}
      <Box
        sx={{
          minWidth: "60px",
          minHeight: "60px",
          borderRadius: "50%",
          border: "2px solid #84a3c3",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 1,
        }}
      >
        <img
          src={icon}
          alt={title}
          style={{ maxWidth: "36px", height: "auto" }}
        />
      </Box>

      {/* Title */}
      <Typography variant="body1" fontWeight={500}>
        {title}
      </Typography>

      {/* Hover Overlay */}
      <Fade in={hovered}>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            bgcolor: "rgba(0, 0, 0, 0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            fontSize: "14px",
            fontWeight: 500,
            textAlign: "center",
            px: 2,
          }}
        >
          Click to view this section
        </Box>
      </Fade>
    </Box>
  );
};

export default ServiceCard;
