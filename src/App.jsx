import HeroSection from "./pages/Hero/HeroSection";
import CardSection from "./pages/CardSection/CardSection";
import DeepenKnowledge from "./pages/DeepenKnowledge/DeepenKnowledge";
import MainSection from "./pages/MainSection/MainSection";
import SectionAhead from "./components/SectionA/SectionAhead";
import SectionVideo from "./components/SectionB/SectionVideo";
import MainLayout from "./pages/layouts/MainLayout";

function App() {
  return (
    <>
      <MainLayout>
        <HeroSection />
        <MainSection />
        <SectionVideo />
        <CardSection />
        <SectionAhead />
        <DeepenKnowledge />
      </MainLayout>
    </>
  );
}

export default App;
