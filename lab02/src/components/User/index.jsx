import './index.css';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class User extends Component {
  render() {
    return (
      <div class='user'>
        <div class='row'>
          <label>First name: </label>
          <span class='value'>{this.props.firstName}</span>
        </div>
        <div class='row'>
          <label>Last name: </label>
          <span class='value'>{this.props.lastName}</span>
        </div>
      </div>
    );
  }
}

export default User;

User.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
}

User.defaultProps = {
  firstName: "Enter first name",
  lastName: "Enter last name"
}