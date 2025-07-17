import { Box, Typography, Container, Divider, Grid } from "@mui/material";
import MainLayout from "../layouts/MainLayout";
import OurCustomers from "../OurCustomers";

const aboutContent = {
  title: "Your Trusted Partner in Engineering Excellence",
  subtitle: "Innovation | Precision | Partnership",
  sections: [
    {
      id: 1,
      content:
        "At <strong>NMTechnocrafts</strong>, we take pride in our dedicated team of seasoned professionals who bring extensive expertise in the Oil & Gas, Steel, Pharmaceutical, Power, and Chemical sectors. Our deep domain knowledge, combined with years of hands-on experience, allows us to offer innovative solutions tailored to meet the unique challenges and demands of each industry. We leverage our comprehensive engineering capabilities across Process, Instrumentation (Control & Automation), and Electrical systems to deliver not just services, but exceptional outcomes that drive operational efficiency and project success.",
    },
    {
      id: 2,
      content:
        "With a focus on <strong>Tailored Software Solutions</strong>, we have forged a robust infrastructure and cultivated a talented team that specializes in the design, development, and engineering of custom software solutions. Whether it's Process Management, Mechanical Engineering, Automation Strategies, Control Systems, Electrical Integration, or Civil Software, NMTechnocrafts unites a multidisciplinary team of experts. This synergy enables us to create comprehensive, bespoke solutions that align precisely with your specifications, enhancing functionality and user experience in your operations.",
    },
    {
      id: 3,
      content:
        "Guided by our mission, <em>'Your Success is Our Mission,'</em> we are unwavering in our commitment to delivering high-quality, precisely engineered software solutions at highly competitive prices. We understand the critical nature of budgetary considerations in today's business environment, and work diligently to engineer effective solutions that not only match your operational needs but also support your financial objectives. Our transparent approach ensures that you receive maximum value from our services, allowing your operations to flourish without exceeding your budget.",
    },
    {
      id: 4,
      content:
        "As your <strong>Partner in Growth</strong>, NMTechnocrafts positions itself as more than just a service provider. Our philosophy is rooted in building strong, lasting relationships based on trust, integrity, and collaboration. We believe in working side by side with you to understand your business models, operational challenges, and long-term aspirations. Through a partnership that prioritizes open communication and shared goals, we strive to transform your business operations and enhance your strategic initiatives, enabling you to achieve sustainable growth and stand out in a competitive marketplace. Let NMTechnocrafts be the ally you can depend on to add significant value to your organization and drive your business forward.",
    },
  ],
};

const AboutUs = () => {
  return (
    <MainLayout>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box textAlign="center" mb={4}>
          <Typography
            variant="h4"
            fontWeight={700}
            color="var(--color-primary-light)"
          >
            {aboutContent.title}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: "text.secondary", mt: 1 }}
          >
            {aboutContent.subtitle}
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
        <Box
          sx={{
            p: 4,
            backgroundColor: "#f9f9f9",
            borderRadius: 3,
            boxShadow: 3,
            lineHeight: 1.8,
          }}
        >
          {aboutContent.sections.map((section, index) => (
            <Box key={section.id}>
              <Typography
                variant="body1"
                paragraph
                textAlign="justify"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
              {index < aboutContent.sections.length - 1 && (
                <Divider
                  sx={{
                    width: "100%",
                    height: "1px",
                    backgroundColor: "var(--color-primary-light)",
                    margin: "1rem auto",
                    borderRadius: "2px",
                    boxShadow: 8,
                  }}
                />
              )}
            </Box>
          ))}
        </Box>
        <OurCustomers />
      </Container>
    </MainLayout>
  );
};

export default AboutUs;
