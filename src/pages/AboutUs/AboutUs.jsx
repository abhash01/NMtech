import { useEffect, useState } from "react";
import { Box, Typography, Container, useMediaQuery } from "@mui/material";
import TopNav from "../../components/Navbar/TopNav/TopNav";
import SubNav from "../../components/Navbar/SubNav/SubNav";
import Footer from "../Footer/Footer";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const companyLogos = [
  "https://iocl.com/assets/images/logo.gif",
  "https://www.cipla.com/themes/cipla/logo.svg",
  "https://www.bharatpetroleum.in/images/BPCL-Golden-Jubilee-Logo.jpg",
  "https://www.jsw.in/sites/all/themes/jsw_theme/images/logos/jsw.png",
  "https://www.valmet.com/contentassets/933cf4360ffc46a894fe262f95a448a8/valmet-forward.svg",
  "	https://www.cyient.com/hubfs/Logo_main_animation1.svg",
  "https://www.pginvit.in/imgs/PGInvIT%20Logo.png",
  "https://www.petrofac.com/media/emafbfhq/logo-white.svg",
  "https://www.atkinsrealis.com/~/media/Images/A/atkinsrealis/logo/logo-gray.svg",
  "https://www.danieli.com/media/assets/logo_danieli.svg",
  "https://www.kinecogroup.com/assets/img/logo/logo-light.png",
  "https://engineersindia.com/assets/images/eil.png",
  "https://www.toyo-eng.com/common/img/logo_w_in.gif",
  "https://img1.wsimg.com/isteam/ip/80aa18a7-dab1-4672-8856-35bfc4e5ee65/logo.png/:/rs=w:435,h:85,cg:true,m/cr=w:435,h:85/qt=q:100/ll",
  "https://www.airflow.co.in/wp-content/uploads/2020/02/logo-airflow-new-1.png",
];

const AboutUs = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobileView = useMediaQuery("(max-width: 991px)");

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

      <Container maxWidth="md" sx={{ py: 6 }}>
        <Typography
          variant="h"
          fontWeight={700}
          gutterBottom
          textAlign="center"
          color="primary"
        >
          Your Trusted Partner in Engineering Excellence
        </Typography>

        <Box sx={{ mt: 3 }}>
          <Typography variant="body1" paragraph>
            At NMTechnocrafts, we take pride in our dedicated team of seasoned
            professionals who bring extensive expertise in the Oil & Gas, Steel,
            Pharmaceutical, Power, and Chemical sectors. Our deep domain
            knowledge, combined with years of hands-on experience, allows us to
            offer innovative solutions tailored to meet the unique challenges
            and demands of each industry. We leverage our comprehensive
            engineering capabilities across Process, Instrumentation (Control &
            Automation), and Electrical systems to deliver not just services,
            but exceptional outcomes that drive operational efficiency and
            project success.
          </Typography>

          <Typography variant="body1" paragraph>
            With a focus on Tailored Software Solutions, we have forged a robust
            infrastructure and cultivated a talented team that specializes in
            the design, development, and engineering of custom software
            solutions. Whether it’s Process Management, Mechanical Engineering,
            Automation Strategies, Control Systems, Electrical Integration, or
            Civil Software, NMTechnocrafts unites a multidisciplinary team of
            experts. This synergy enables us to create comprehensive, bespoke
            solutions that align precisely with your specifications, enhancing
            functionality and user experience in your operations.
          </Typography>

          <Typography variant="body1" paragraph>
            Guided by our mission, “Your Success is Our Mission,” we are
            unwavering in our commitment to delivering high-quality, precisely
            engineered software solutions at highly competitive prices. We
            understand the critical nature of budgetary considerations in
            today’s business environment, and work diligently to engineer
            effective solutions that not only match your operational needs but
            also support your financial objectives. Our transparent approach
            ensures that you receive maximum value from our services, allowing
            your operations to flourish without exceeding your budget.
          </Typography>

          <Typography variant="body1" paragraph>
            As your Partner in Growth, NMTechnocrafts positions itself as more
            than just a service provider. Our philosophy is rooted in building
            strong, lasting relationships based on trust, integrity, and
            collaboration. We believe in working side by side with you to
            understand your business models, operational challenges, and
            long-term aspirations. Through a partnership that prioritizes open
            communication and shared goals, we strive to transform your business
            operations and enhance your strategic initiatives, enabling you to
            achieve sustainable growth and stand out in a competitive
            marketplace. Let NMTechnocrafts be the ally you can depend on to add
            significant value to your organization and drive your business
            forward.
          </Typography>
        </Box>
      </Container>

      <Container
        maxWidth="lg"
        sx={{ my: 6, backgroundColor: "var(--color-secondary-light)", py: 4 }}
      >
        <Typography
          variant="h6"
          fontWeight={600}
          textAlign="center"
          sx={{ mb: 4 }}
        >
          Our Trusted Clients & Partners
        </Typography>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={isMobileView ? 2 : 5}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={3000}
          style={{ cursor: "grab" }}
        >
          {companyLogos.map((logo, index) => (
            <SwiperSlide key={index}>
              <Box
                component="img"
                src={logo}
                alt={`Client logo ${index + 1}`}
                sx={{
                  width: "130px",
                  height: "130px",
                  mx: "auto",
                  objectFit: "contain",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>

      <Footer />
    </>
  );
};

export default AboutUs;
