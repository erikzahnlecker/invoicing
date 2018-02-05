import React, { Component } from 'react';
import './styles.css';

export default class Input extends Component {

  constructor (props) {
    super(props);

    this.state = {
      value: '',
    }
  }

  _handleChange (e) {
    this.setState({ value: e.target.value }, () => {
      this.props.onChange && this.props.onChange(this.state.value);
    });
  }

  render () {
    return (
      <input
        className='input'
        style={this.props.style}
        placeholder={this.props.placeholder}
        type='text'
        onChange={e => this._handleChange(e)}
      />
    );
  }
}
