import React from "react";
import "./App.css";
import Button from "./components/ui/Button/Button";

const App = (props) => {
  return <div className="App">
    <Button text={'srtyu'} coucou="fghjkl"/>
    <Button text={["dfghjkl",'ertyu']}/>
    <Button text={"fghjkl".substring(2)}/>
    <Button text="fghjkl"/>

  </div>;
};

export default App;
