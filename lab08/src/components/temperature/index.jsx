import { Component } from "react";

export default class Temperature extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = (e) => {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.value;
    const type = this.props.type;
    return(
      <fieldset>
        <legend>Enter temperature in {type}</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}