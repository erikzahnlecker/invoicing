import React, { Component } from 'react';
import Input from '../Input';
import './styles.css';

export default class ServicesTable extends Component {
  constructor (props) {
    super(props);

    this.state = {
      services: [this._getBlankService()],
    }
  }

  _getBlankService () {
    return {
      type: '',
      description: '',
      quantity: 0,
      price: 0,
      amount: 0,
    }
  }

  _addNewService () {
    this.setState({
      services: this.state.services.concat(this._getBlankService())
    });
  }

  _deleteServiceRow (index) {
    var rows = [...this.state.services];
    rows.splice(index, 1);
    console.log(rows);
    this.setState({services: rows});
    console.log(this.state);
    console.log(this.state.services);
  }

  _updateStateFromService (service, index) {
    var rows = [...this.state.services];
    rows[index] = service;
    this.setState({services: rows});
    console.log(this.state);
  }

  render(){
    return (
      <div>
        <table>
          <tr>
            <th>Type</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Amount</th>
            <th>Total</th>
          </tr>
          {this.state.services.map((service, index) => (
            <Service
              key={index}
              i={index}
              deleteRow={this._deleteServiceRow.bind(this)}
              updateServices={this._updateStateFromService.bind(this)}/>
          ))}
        </table>
        <button onClick={() => this._addNewService()}>+ Add Row</button>
      </div>
    );
  }
}

class Service extends Component {

  constructor (props) {
    super(props);

    this.state = {
      type: '',
      description: '',
      quantity: 0,
      price: 0,
      amount: 0,
    }
  }

  _handleChangeType (value, index) {
    this.setState({
      type: value,
    }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state);
      }
    })
    this.props.updateServices(this.state, index);
  }

  _handleChangeDescription (value, index) {
    this.setState({
      description: value,
    }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state);
      }
    })
    this.props.updateServices(this.state, index);
  }

  _handleChangeQuantity (value, index) {
    this.setState({
      quantity: value,
    }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state);
      }
    })
    if (value > 0) {
      this.setState({amount: value*this.state.price});
    } else {
      this.setState({amount: 0});
    }
    this.props.updateServices(this.state, index);
  }

  _handleChangePrice (value, index) {
    this.setState({
      price: value,
    }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state);
      }
    })
    if (this.state.quantity > 0) {
      this.setState({amount: this.state.quantity*value});
    } else {
      this.setState({amount: 0});
    }
    this.props.updateServices(this.state, index);
  }

  _multiply (x, y) {
    return x * y;
  }


  render () {
    return (
      <div>
        <tr>
          <td>
            <Input placeholder='Describe the service' type= 'text' onChange={value => this._handleChangeType(value, this.props.i)}/>
          </td>
          <td>
            <Input placeholder='Describe what you provided' type= 'text' onChange={value => this._handleChangeDescription(value, this.props.i)}/>
          </td>
          <td>
            <Input placeholder='#' type='number' onChange={value => this._handleChangeQuantity(value, this.props.i)}/>
          </td>
          <td>
            <Input placeholder='Price per item' type='number' onChange={value => this._handleChangePrice(value, this.props.i)}/>
          </td>
          <td class="amount">{this._multiply(this.state.quantity, this.state.price)}</td>
          <td>
            <button onClick={() => this.props.deleteRow(this.props.i)}>Delete Row</button>
          </td>
        </tr>
      </div>
    )
  }

}
