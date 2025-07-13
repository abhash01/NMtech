import { useEffect, useState, useRef } from "react";
import {
  Box,
  Typography,
  Container,
  useMediaQuery,
  Stack,
  Button,
  TextField,
} from "@mui/material";
import TopNav from "../../components/Navbar/TopNav/TopNav";
import SubNav from "../../components/Navbar/SubNav/SubNav";
import Footer from "../Footer/Footer";

const ContactUs = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobileView = useMediaQuery("(max-width: 991px)");
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
        {/* <SubNav scrolledHeight={getScrolledHeight()} /> */}
      </Container>

      <Container maxWidth="sm" sx={{ py: 6 }}>
        <Typography
          variant="h4"
          fontWeight={700}
          textAlign="center"
          sx={{ mb: 1 }}
        >
          CONTACT FORM
        </Typography>
        <Box
          sx={{
            height: "3px",
            width: "40px",
            background: "red",
            mx: "auto",
            mb: 4,
          }}
        />

        <Box
          component="form"
          ref={formRef}
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField
            name="user_name"
            placeholder="Your Name"
            fullWidth
            required
          />
          <TextField
            name="user_email"
            type="email"
            placeholder="Your Email"
            fullWidth
            required
          />
          <TextField name="user_mobile" placeholder="Your Mobile" fullWidth />
          <TextField name="company_name" placeholder="Company Name" fullWidth />
          <TextField
            name="message"
            placeholder="Message"
            multiline
            minRows={4}
            fullWidth
          />
          <input type="file" name="attachment" />
          <Stack direction="row" justifyContent="center" sx={{ mt: 2 }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={loading}
            >
              {loading ? "Sending..." : "Submit"}
            </Button>
          </Stack>
        </Box>
      </Container>

      <Footer />
    </>
  );
};

export default ContactUs;
