import React, { useState } from "react";
import FlexV3Grow from "./components/layout/FlexV3Grow/FlexV3Grow";
import Navbar from "./components/ui/Navbar/Navbar";
import Footer from "./components/ui/Footer/Footer";
import Header from "./components/ui/Header/Header";
import { emptyMeme } from "orsys-tjs-meme";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import MemeThumbnail from "./pages/MemeThumbnail/MemeThumbnail";
import MemeEditor from "./pages/MemeEditor/MemeEditor";
import FlexH1Grow from "./components/layout/FlexH1Grow/FlexH1Grow";
import MemeSVGViewerStored from "./components/ui/MemeSVGViewerStored/MemeSVGViewerStored";
import { MemeFormStored } from "./components/MemeForm/MemeForm";

const App = () => {
  const [current, setCurrent] = useState(emptyMeme);
  return (
    <div className="App">
      <FlexV3Grow>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/thumbnail" element={<MemeThumbnail />} />
          <Route
            path="/editor"
            element={
              <FlexH1Grow>
                <MemeSVGViewerStored />
                <MemeFormStored />
              </FlexH1Grow>
            }
          />
        </Routes>
        <Footer />
      </FlexV3Grow>
    </div>
  );
};

export default App;
