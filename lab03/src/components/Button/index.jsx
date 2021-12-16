import { Component } from "react";

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { isButtonStatus: true, value: 100 };
    this.btnClickMe_Click = this.btnClickMe_Click.bind(this);
  }

  btnClickMe_Click() {
    this.setState(state => ({
      isButtonStatus: !state.isButtonStatus
    }));
  }

  btnGetValue_Click = () => {
    let value = this.state.value + 100;
    this.setState({
      value: value
    });
  }

  render() {
    return(
      <div>
        <button onClick={this.btnClickMe_Click}>Click me</button> &nbsp;
        <span>Status of Button: {this.state.isButtonStatus ? 'True' : 'False'}</span>
        <br />
        <button onClick={this.btnGetValue_Click}>Get Value</button> &nbsp;
        <span>Value: { this.state.value }</span>
      </div>
    );
  }
}