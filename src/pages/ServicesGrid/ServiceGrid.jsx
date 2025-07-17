import { Box, Container, Grid } from "@mui/material";
import { servicesData } from "../../data";
import ServiceCard from "../../components/Card/ServiceCard";

const ServicesGrid = () => {
  return (
    <Box sx={{ py: 6, backgroundColor: "#f0f4f8" }}>
      <Container sx={{ my: 4 }}>
        <Grid container spacing={4}>
          {servicesData.map((item, idx) => (
            <Grid key={idx} size={{ xs: 12, sm: 6, md: 4 }}>
              <ServiceCard icon={item.icon} title={item.title} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesGrid;
