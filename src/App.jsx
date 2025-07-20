// import HeroSection from "./pages/Hero/HeroSection";
// import CardSection from "./pages/CardSection/CardSection";
// import DeepenKnowledge from "./pages/DeepenKnowledge/DeepenKnowledge";
// import MainSection from "./pages/MainSection/MainSection";
// import SectionAhead from "./components/SectionA/SectionAhead";
// import SectionVideo from "./components/SectionB/SectionVideo";
import MainLayout from "./pages/layouts/MainLayout";
import OurCustomers from "./pages/OurCustomers";
import HeroSectionNew from "./pages/HeroNew/HeroSectionNew";
import ServicesGrid from "./pages/ServicesGrid/ServiceGrid";
import DigitalTwin from "./pages/DigitalTwin/DigitalTwin";
import ReverseEngg from "./pages/ReverseEngg/ReverseEngg";
import Digitization from "./pages/Digitization/Digitization";
import BusinessIntelligence from "./pages/BusinessIntelligence/BusinessIntelligence";
import NMT from "./pages/NMT/NMT";

function App() {
  return (
    <>
      <MainLayout>
        <HeroSectionNew />
        <ServicesGrid />
        <DigitalTwin />
        <ReverseEngg />
        <Digitization />
        <BusinessIntelligence />
        <NMT />
        {/* Uncomment the following lines to include the HeroSection and MainSection components */}
        {/* <HeroSection /> */}
        {/* <MainSection /> */}
        {/* <SectionVideo /> */}
        {/* <CardSection /> */}
        {/* <SectionAhead /> */}
        {/* <DeepenKnowledge /> */}
        <OurCustomers />
      </MainLayout>
    </>
  );
}

export default App;
