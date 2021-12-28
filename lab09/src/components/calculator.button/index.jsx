import { Component } from 'react';
import './style.css';

export default class Button extends Component {
  constructor(props) {
    super(props);
  }

  handle_click = () => {
    this.props.onHandleClick(this.props.value);
  }

  render() {
    const className = this.props.className === 'zero' ? this.props.className : '';
    return(
      <button type="button" className={className} onClick={this.handle_click} >
        {this.props.value}
      </button>
    );
  }
}