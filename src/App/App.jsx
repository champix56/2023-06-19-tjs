import React from "react";
import style from "./App.module.css";
import Button from "./components/ui/Button/Button";
class App extends React.PureComponent {
  counter = 0;
  constructor(props) {
    super(props);
    console.log("constructeur de App");
  }
  render() {
    return (
      <div className={style.App}>
        valeur de counter :{" "}
        <span style={{ fontWeight: "900", fontSize: "42pt" }}>
          {this.counter}
        </span>
        <hr />
        <Button bgcolor="tomato">-1</Button>
        <Button bgcolor="skyblue">+1</Button>
      </div>
    );
  }
}
export default App;
