import { Component, createContext } from "react";
import Screen from "../calculator.screen";
import Button from "../calcualotor.button";
import "./style.css"

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      value : 0,
      isFloat: false,
      memory: undefined,
      operator: undefined,
      isReset: false
    };
  }

  onClick = (value) => {
    let strNewValue = "";
    let newValue = 0;

    switch(value){
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        strNewValue = this.state.isReset == true ? value : this.state.value + value;
        newValue = this.state.isFloat ? parseFloat(strNewValue) : parseInt(strNewValue);
        this.setState({ 
          value : newValue, 
          isReset : false 
        });
        break;
      case 'AC':
        this.setState({ 
          value : 0,
          isFloat: false,
          memory: undefined,
          operator: undefined,
          isReset: false
        });
        break;
      case ".":
        if(this.state.value.toString().includes('.') == false) {
          strNewValue = this.state.value + ".";
          this.setState({ 
            value: strNewValue,
            isFloat: true 
          });
        }
        break;
      case "+/-":
        newValue = 0 - Number(this.state.value);
        this.setState({ value: newValue });
        break;
      case "%":
        newValue = (Number(this.state.value) * 100) / 10000;
        this.setState({ 
          value: newValue, 
          isReset: true 
        });
        break;
      case "+":
        if(this.state.memory === undefined) {
          newValue = this.state.value;
        } else {
          newValue = this.cal();
        }

        this.setState({
          value : newValue,
          memory : newValue,
          operator : "+",
          isReset: true
        });
        break;

      case "-":
        if(this.state.memory === undefined) {
          newValue = this.state.value;
        } else {
          newValue = this.cal();
        }

        this.setState({
          value : newValue,
          memory : newValue,
          operator : "-",
          isReset: true
        });
        break;
      
      case "*":
        if(this.state.memory === undefined) {
          newValue = this.state.value;
        } else {
          newValue = this.cal();
        }

        this.setState({
          value : newValue,
          memory : newValue,
          operator : "*",
          isReset: true
        });
        break;
      
        case "/":
        if(this.state.memory === undefined) {
          newValue = this.state.value;
        } else {
          newValue = this.cal();
        }

        this.setState({
          value : newValue,
          memory : newValue,
          operator : "/",
          isReset: true
        });
        break;
      
      case "=":
        if(this.state.memory === undefined) {
          newValue = this.state.value;
        } else {
          newValue = this.cal();
        }

        this.setState({
          value : newValue,
          memory : undefined,
          operator : undefined,
          isReset: true
        });
        break;
      default:
    }
  }

  cal() {
    switch(this.state.operator) {
      case "+":
        return Number(this.state.memory) + Number(this.state.value);
      case "-":
        return Number(this.state.memory) - Number(this.state.value);
      case "*":
        return Number(this.state.memory) * Number(this.state.value);
      case "/":
        if(this.state.value === 0)
          return "N/A";
        else
          return Number(this.state.memory) / Number(this.state.value);
      default:
        break;
    }
  }

  render() {
    const value = this.state.value;
    return(
      <>
        <div>
          <Screen value={value} />
        </div>
        <div className="group-button">
          <Button value="AC" onHandleClick={this.onClick}/>
          <Button value="+/-" onHandleClick={this.onClick}/>
          <Button value="%" onHandleClick={this.onClick}/>
          <Button value="/" onHandleClick={this.onClick}/>
          <Button value="7" onHandleClick={this.onClick}/>
          <Button value="8" onHandleClick={this.onClick}/>
          <Button value="9" onHandleClick={this.onClick}/>
          <Button value="X" onHandleClick={this.onClick}/>
          <Button value="4" onHandleClick={this.onClick}/>
          <Button value="5" onHandleClick={this.onClick}/>
          <Button value="6" onHandleClick={this.onClick}/>
          <Button value="-" onHandleClick={this.onClick}/>
          <Button value="1" onHandleClick={this.onClick}/>
          <Button value="2" onHandleClick={this.onClick}/>
          <Button value="3" onHandleClick={this.onClick}/>
          <Button value="+" onHandleClick={this.onClick}/>
          <Button value="0" className="zero" onHandleClick={this.onClick}/>
          <Button value="." onHandleClick={this.onClick}/>
          <Button value="=" onHandleClick={this.onClick}/>
        </div>
      </>
    );
  }
}