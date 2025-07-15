import { useState, useRef } from "react";
import {
  Box,
  Typography,
  Container,
  Stack,
  Button,
  TextField,
  Grid,
} from "@mui/material";
import MainLayout from "../layouts/MainLayout";

const ContactUs = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "your_service_id", // e.g., "service_123abc"
        "your_template_id", // e.g., "template_contact"
        formRef.current,
        "your_public_key" // e.g., "pUbLic_K3Yxx123"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset();
          setLoading(false);
        },
        (error) => {
          alert("Failed to send. Please try again later.");
          console.error(error);
          setLoading(false);
        }
      );
  };

  return (
    <MainLayout>
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Typography
          variant="h4"
          fontWeight={600}
          color="var(--color-primary-light)"
          align="center"
          gutterBottom
        >
          CONTACT FORM
        </Typography>
        <Box
          sx={{
            height: "3px",
            width: "60px",
            background: "var(--color-primary-light)",
            mx: "auto",
            mb: 4,
          }}
        />

        <Box
          component="form"
          ref={formRef}
          onSubmit={handleSubmit}
          // sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <Grid container spacing={2}>
            <Grid size={6}>
              <TextField
                label="Your Name"
                name="user_name"
                placeholder="Your Name"
                fullWidth
                required
              />
            </Grid>
            <Grid size={6}>
              <TextField
                label="Your Email"
                name="user_email"
                type="email"
                placeholder="Your Email"
                fullWidth
                required
              />
            </Grid>
            <Grid size={6}>
              <TextField
                label="Your Mobile"
                name="user_mobile"
                placeholder="Your Mobile"
                fullWidth
              />
            </Grid>
            <Grid size={6}>
              <TextField
                label="Company Name"
                name="company_name"
                placeholder="Company Name"
                fullWidth
              />
            </Grid>
            <Grid size={12}>
              <TextField
                label="Message"
                name="message"
                placeholder="Message"
                multiline
                minRows={4}
                fullWidth
              />
            </Grid>
            <Grid size={12}>
              <input type="file" name="attachment" />
            </Grid>
            <Stack direction="row" justifyContent="center" sx={{ mt: 2 }}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "var(--color-primary-light)",
                  color: "var(--color-primary)",
                  "&:hover": {
                    color: "var(--color-primary-light)",
                    backgroundColor: "var(--color-primary-dark)",
                  },
                }}
                disabled={loading}
              >
                {loading ? "Sending..." : "Submit"}
              </Button>
            </Stack>
          </Grid>
        </Box>
      </Container>
    </MainLayout>
  );
};

export default ContactUs;
