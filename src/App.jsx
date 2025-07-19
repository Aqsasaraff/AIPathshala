import { useState } from "react";
import "./App.css";
import WhyChooseUs from "./Components/WhyChooseUs";
import MissionVision from "./Components/MissionVision";
import ExploreAITools from "./Components/ExploreAITools";
import WatchAIInAction from "./Components/WatchAIInAction";
import { Routes, Route } from "react-router-dom";
import VideosPage from "./Components/WatchAIInAction/VideosPage";
import VideoDetail from "./Components/WatchAIInAction/VideoDetail";
import Header from "./Components/Header";
import FAQ from "./Components/FAQs";
import Footer from "./Components/Footer";
import { AINewsSection } from "./Components/AI News Section";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <WhyChooseUs />
            <MissionVision />
            <ExploreAITools />
            <WatchAIInAction />
            <AINewsSection />
            <FAQ />
            <Footer />
          </>
        }
      />
      <Route path="/videos" element={<VideosPage />} />
      <Route path="/videos/:id" element={<VideoDetail />} />
    </Routes>
  );
}

export default App;
