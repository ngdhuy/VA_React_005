import './index.css';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class User extends Component {
  render() {
    return (
      <div className='user'>
        <div className='row'>
          <label>First name: </label>
          <span className='value'>{this.props.firstName}</span>
        </div>
        <div className='row'>
          <label>Last name: </label>
          <span className='value'>{this.props.lastName}</span>
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