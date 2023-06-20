import React, { useEffect, useState } from "react";
import FlexV3Grow from "./components/layout/FlexV3Grow/FlexV3Grow";
import Navbar from "./components/ui/Navbar/Navbar";
import FlexH1Grow from "./components/layout/FlexH1Grow/FlexH1Grow";
import MemeForm from "./components/MemeForm/MemeForm";
import Footer from "./components/ui/Footer/Footer";
import Header from "./components/ui/Header/Header";
import { MemeSVGViewer, emptyMeme } from "orsys-tjs-meme";
const App = () => {
  const [current, setCurrent] = useState(emptyMeme);
  const [ressources, setressources] = useState({images:[],memes:[]})
  useEffect(() => {
    const intervalDescripteur=setInterval(()=>{
      const pri=fetch('http://localhost:5679/images').then(response=>response.json())
      const prm=fetch('http://localhost:5679/memes').then(response=>response.json())
      Promise.all([pri,prm]).then(ressourcesArray=>{
        setressources({images:ressourcesArray[0],memes:ressourcesArray[1]})
      })},5000)
      return()=>{clearInterval(intervalDescripteur)}
  }, [])
  return (
    <div className="App">
      <FlexV3Grow>
        <Header />
        <Navbar />
        <FlexH1Grow>
          <MemeSVGViewer meme={current} image={ressources.images.find(img=>img.id===current.imageId)} basePath="" />
          <MemeForm
            meme={current}
            onMemeChange={(meme) => {
              setCurrent(meme);
            }}
            images={ressources.images}
          />
        </FlexH1Grow>
        <Footer />
      </FlexV3Grow>
    </div>
  );
};

export default App;
