import { Component } from "react";
import Temperature from "../temperature";

export default class TemperatureContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      temperture: '',
      type: 'c'
    };
  }

  handle_c_change = (temperatureValue) => {
    console.log("C change");
    this.setState(
      {
        temperature: temperatureValue,
        type: 'c'
      }
    );
  }

  handle_f_change = (temperatureValue) => {
    console.log("F change");
    this.setState(
      {
        temperature: temperatureValue,
        type: 'f'
      }
    );
  }

  convertCtoF = (value) => (value - 32) * 5 / 9;
  convertFtoC = (value) => (value * 9 /  5) + 32;

  render() {
    const type = this.state.type;
    const temperatureValue = this.state.temperature;
    const c_value = type === 'c' ? temperatureValue : this.convertFtoC(temperatureValue);
    const f_value = type === 'f' ? temperatureValue : this.convertCtoF(temperatureValue);
    return(
      <div>
      <h1>Convert temperature C to F</h1>
      <div>
        <Temperature type="c" value={c_value} onTemperatureChange={this.handle_c_change} />
        <Temperature type="f" value={f_value} onTemperatureChange={this.handle_f_change} />
      </div>
    </div>
    );
  }
}