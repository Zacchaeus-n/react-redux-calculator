import React, { Component } from "react";
import ControlPanel from "../ControlPanel/ControlPanel";
import Digits from "../Digits/Digits";
import Display from "../Display/Display";
import History from "../History/History";
import Operators from "../Operators/Operators";
import "./Calculator.css";

class Calculator extends Component {
  render() {
    return (
      <main className="react-calculator">
        <Display />
        <ControlPanel />
        <Digits />
        <Operators />
        <History />
      </main>
    );
  }
}

export default Calculator;
