import React from "react";
import FlexV3Grow from "./components/layout/FlexV3Grow/FlexV3Grow";
import Navbar from "./components/ui/Navbar/Navbar";
import FlexH1Grow from "./components/layout/FlexH1Grow/FlexH1Grow";
import MemeForm from "./components/MemeForm/MemeForm";
import Footer from "./components/ui/Footer/Footer";
import Header from "./components/ui/Header/Header";
import { MemeSVGViewer } from "orsys-tjs-meme";
import MemeSVGViewerStored from "./components/ui/MemeSVGViewerStored/MemeSVGViewerStored";
import MemeFormStored from "./components/MemeForm/MemeFormStored";
import { Routes, Route} from 'react-router-dom'
import Home from "./pages/Home/Home";
import Editor from "./pages/Editor/Editor";
import Thumbnail from "./pages/Thumbnail/Thumbnail";

const App = () => {
 
  return (
    <div className="App">
      <FlexV3Grow>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/thumbnail" element={<Thumbnail/>}/>
          <Route path="/Editor" element={<Editor/>}/>
        </Routes>
        <Footer />
      </FlexV3Grow>
    </div>
  );
};

export default App;
