import { Box, Typography, Divider, Grid, Container } from "@mui/material";
import { customerLogos } from "../data";

const OurCustomers = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 6 }}>
    <Box sx={{ textAlign: "center", mt: 6, mb: 4 }}>
      <Typography
        variant="h5"
        fontWeight={600}
        color="var(--color-primary-light)"
        gutterBottom
      >
        Our Valued Customers
      </Typography>

      <Divider
        sx={{
          width: "220px",
          height: "2px",
          backgroundColor: "var(--color-primary-light)",
          margin: "1rem auto",
          borderRadius: "2px",
          boxShadow: 8,
          mb: 4,
        }}
      />

      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {customerLogos.map((customer) => (
          <Grid size={{ xs: 6, sm: 4, md: 3 }} key={customer.name}>
            <Box
              sx={{
                p: 2,
                height: "80px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "& img": {
                  maxWidth: "80%",
                  maxHeight: "80px",
                  // filter: "grayscale(100%)",
                  // transition: "filter 0.3s ease",
                  // "&:hover": {
                  //   filter: "grayscale(0%)",
                  // },
                },
              }}
            >
              <img
                src={customer.logo}
                alt={customer.name}
                title={customer.name}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
    </Container>
  );
};

export default OurCustomers;
