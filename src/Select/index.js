import React, { Component } from 'react';
import './styles.css';

export default class ServiceSelect extends Component {

  constructor (props) {
    super(props);

    this.state = {
      value: 'Service',
    }
  }

  _handleChange (e) {
    this.setState({ value: e.target.value }, () => {
      this.props.onChange && this.props.onChange(this.state.value);
    });
  }

  render () {
    return (
      <select
        className='serviceSelect'
        style={this.props.style}
        value={this.state.value}
        onChange={e => this._handleChange(e)}>
          <option value="service">Service</option>
          <option value="expense">Expense</option>
        </select>
    );
  }
}
