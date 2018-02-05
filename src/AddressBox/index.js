import React, { Component } from 'react';
import Input from '../Input';
import './styles.css';

export default class AddressBox extends Component {

  constructor (props) {
    super(props);

    this.state = {
      name: '',
      address: '',
    }
  }

  _handleChangeName (value) {
    this.setState({
      name: value,
    }, () => {
      if (this.props.onChangeData) {
        this.props.onChangeData(this.state);
      }
    })
  }

  _handleChangeAddress (value) {
    this.setState({
      address: value,
    }, () => {
      if (this.props.onChangeData) {
        this.props.onChangeData(this.state);
      }
    })
  }

  render() {
    return (
      <div>
        <Input
        style = {{width: 200, height:15}}
        placeholder='Company Name'
        type='text'
        onChange={value => this._handleChangeName(value)} />

        <p></p>
        <Input
        style = {{width: 200, height:75}}
        placeholder='Company Address'
        type='text'
        onChange={value => this._handleChangeAddress(value)} />
      </div>
    );
  }
}
