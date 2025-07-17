import HeroSection from "./pages/Hero/HeroSection";
import CardSection from "./pages/CardSection/CardSection";
import DeepenKnowledge from "./pages/DeepenKnowledge/DeepenKnowledge";
import MainSection from "./pages/MainSection/MainSection";
import SectionAhead from "./components/SectionA/SectionAhead";
import SectionVideo from "./components/SectionB/SectionVideo";
import MainLayout from "./pages/layouts/MainLayout";
import OurCustomers from "./pages/OurCustomers";
import HeroSectionNew from "./pages/HeroNew/HeroSectionNew";
import ServicesGrid from "./pages/ServicesGrid/ServiceGrid";
import DigitalTwin from "./pages/DigitalTwin/DigitalTwin";

function App() {
  return (
    <>
      <MainLayout>
        <HeroSectionNew />
        <ServicesGrid />
        <DigitalTwin />
        <HeroSection />
        <MainSection />
        <SectionVideo />
        <CardSection />
        <SectionAhead />
        <DeepenKnowledge />
        <OurCustomers />
      </MainLayout>
    </>
  );
}

export default App;
