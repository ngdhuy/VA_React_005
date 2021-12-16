import { Component } from "react";
import './style.css'

export default class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      second: 10
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.timer_tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  timer_tick = () => {
    let value = (this.state.second <= 0) ? 0 : this.state.second - 1;
    this.setState({ 
      date: new Date(),
      second: value
    });
    
    // if (value == 0)
    //   clearInterval(this.timerID);
  }

  render() {
    return(
      <div className="count-down">
        <h1>Count down</h1>
        <ul>
          <li>
            <span class="full">{this.state.date.toLocaleTimeString()}</span>
          </li>
          <li>
            <span className="second">{(this.state.second != 0) ? this.state.second : "Time out"}</span>
          </li>
        </ul>
      </div>
    );
  }
}