import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const TitleImageCard = ({ title, images }) => {
  return (
    <Box p={3} boxShadow={3} borderRadius={2} maxWidth={600} mx="auto" mb={3}>
      <Typography
        variant="h5"
        fontWeight="bold"
        gutterBottom
        textAlign="center"
      >
        {title}
      </Typography>

      <Grid container spacing={2}>
        {images.map((img, index) => (
          <Grid size={{ xs: 12, sm: 6 }} key={index}>
            <Box
              component="img"
              src={img.url}
              alt={img.alt || `image-${index}`}
              width="100%"
              borderRadius={1}
              boxShadow={1}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TitleImageCard;
