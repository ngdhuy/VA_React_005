import { Component, createContext } from "react";
import Screen from "../calculator.screen";
import Button from "../calcualotor.button";
import "./style.css"

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { value : "0" };
  }

  onClick = (value) => {
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
        let newValue = this.state.value + value;
        this.setState({ value : newValue });
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
        <div class="group-button">
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
          <Button value="0" style="zero" onHandleClick={this.onClick}/>
          <Button value="." onHandleClick={this.onClick}/>
          <Button value="=" onHandleClick={this.onClick}/>
        </div>
      </>
    );
  }
}