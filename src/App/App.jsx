import React, { useState } from "react";
import FlexV3Grow from "./components/layout/FlexV3Grow/FlexV3Grow";
import Navbar from "./components/ui/Navbar/Navbar";
import FlexH1Grow from "./components/layout/FlexH1Grow/FlexH1Grow";
import MemeForm, { MemeFormStored } from "./components/MemeForm/MemeForm";
import Footer from "./components/ui/Footer/Footer";
import Header from "./components/ui/Header/Header";
import { MemeSVGViewer, emptyMeme } from "orsys-tjs-meme";
import MemeSVGViewerStored from "./components/ui/MemeSVGViewerStored/MemeSVGViewerStored";
const App = () => {
  const [current, setCurrent] = useState(emptyMeme);
  return (
    <div className="App">
      <FlexV3Grow>
        <Header />
        <Navbar />
        <FlexH1Grow>
          <MemeSVGViewerStored images={[]} />
          <MemeFormStored/>
        </FlexH1Grow>
        <Footer />
      </FlexV3Grow>
    </div>
  );
};

export default App;
