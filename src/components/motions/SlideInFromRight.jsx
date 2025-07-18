import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const SlideInFromRight = ({ title, image }) => {
  return (
    <Container>
      <MotionBox
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        sx={{ mb: 5, textAlign: "center" }}
      >
        <Typography
          variant="subtitle1"
          sx={{ color: "text.secondary", mb: 2, fontWeight: 500 }}
        >
          {title}
        </Typography>
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            width: "100%",
            maxWidth: "720px",
            height: "auto",
            borderRadius: 2,
            border: "1px solid var(--color-primary-light)",
            mx: "auto",
            transition: "transform 0.4s ease",
            "&:hover": {
              transform: "scale(1.03)",
            },
          }}
        />
      </MotionBox>
    </Container>
  );
};

export default SlideInFromRight;
