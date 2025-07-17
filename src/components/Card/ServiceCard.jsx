import { Box, Typography } from "@mui/material";

const ServiceCard = ({ icon, title }) => {
  return (
    <Box
      sx={{
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
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        },
      }}
    >
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
      <Typography variant="body1" fontWeight={500}>
        {title}
      </Typography>
    </Box>
  );
};

export default ServiceCard;
