import React from 'react'
import FlexV3Grow from './components/layout/FlexV3Grow/FlexV3Grow'
import Navbar from './components/ui/Navbar/Navbar'
import FlexH1Grow from './components/layout/FlexH1Grow/FlexH1Grow'
import MemeForm from './components/MemeForm/MemeForm'
import Footer from './components/ui/Footer/Footer'
import Header from './components/ui/Header/Header'
import { MemeSVGViewer, emptyMeme,  } from 'orsys-tjs-meme'
const App = () => {
  return (
    <div className='App'>
        <FlexV3Grow>
          <Header/>
          <Navbar/>
          <FlexH1Grow>
            <MemeSVGViewer meme={emptyMeme} image={undefined} basePath=''/>
            <MemeForm/>
          </FlexH1Grow>
          <Footer/>
        </FlexV3Grow>
    </div>
  )
}

export default App
