import React, { useState } from "react";
import FlexV3Grow from "./components/layout/FlexV3Grow/FlexV3Grow";
import Navbar from "./components/ui/Navbar/Navbar";
import FlexH1Grow from "./components/layout/FlexH1Grow/FlexH1Grow";
import MemeForm from "./components/MemeForm/MemeForm";
import Footer from "./components/ui/Footer/Footer";
import Header from "./components/ui/Header/Header";
import { MemeSVGViewer, emptyMeme } from "orsys-tjs-meme";
import jsonContent from './db.json'
export const CurrentMemeContext = React.createContext({meme:emptyMeme,updateCurrent:()=>{}});
export const RessourcesContext = React.createContext({images:[],memes:[]});
const App = () => {
  const [current, setCurrent] = useState(emptyMeme);
  return (
    <div className="App">
    <RessourcesContext.Provider value={{images:jsonContent.images,memes:jsonContent.memes}}>
    <CurrentMemeContext.Provider value={{...current,set:setCurrent}}>
      <FlexV3Grow>
        <Header />
        <Navbar />
        <FlexH1Grow>
          <MemeSVGViewer meme={current} image={jsonContent.images.find(img=>img.id===current.imageId)} basePath="" />
          <MemeForm
           
            onMemeChange={(meme) => {
              setCurrent(meme);
            }}
          />
        </FlexH1Grow>
        <Footer />
      </FlexV3Grow>
      </CurrentMemeContext.Provider>
      </RessourcesContext.Provider>
    </div>
  );
};

export default App;
