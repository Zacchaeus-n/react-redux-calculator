import React, { Component } from "react";
import ee from "../../eventEmitter/eventEmitter";
import store from "../../store/Store";
import ControlPanel from "../ControlPanel/ControlPanel";
import Digits from "../Digits/Digits";
import Display from "../Display/Display";
import History from "../History/History";
import Operators from "../Operators/Operators";
import "./Calculator.css";

class Calculator extends Component {
  constructor(props) {
    super(props);

    ee.addListener("displayUpdate", () => this.forceUpdate());
  }
  render() {
    return (
      <main className="react-calculator">
        <Display text={store.curExpression} />
        <ControlPanel />
        <Digits />
        <Operators />
        <History />
      </main>
    );
  }
}

export default Calculator;
