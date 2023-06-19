import React from "react";
import "./App.css";
import Button from "./components/ui/Button/Button";

const App = (props) => {
  return (
    <div className="App">
      <Button  onButtonClick={(arg)=>{
        console.log('%c%s','font-size:42pt;color:blue','app function')
        console.log(arg)
      }} type='button' bgcolor="tomato" color="green" style={{width:'250px'}}>
        <div>coucou</div>
        <img src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/check-256.png" alt="ok" />
      </Button>
      <Button bgcolor="orange" >DEMAT BREIZH</Button>
      <Button >
        <div>rtyuio</div>
      </Button>
      <Button children="fghjkl" />
    </div>
  );
};

export default App;
