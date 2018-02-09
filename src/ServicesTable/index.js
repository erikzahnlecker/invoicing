import React, { Component } from 'react';
import Input from '../Input';
import ServiceSelect from '../Select';
import './styles.css';

var idCounter = 0;

export default class ServicesTable extends Component {
  constructor (props) {
    super(props);

    this.state = {
      services: [this._getBlankService()],
    }
  }

incrementId () {
  return idCounter++
}

  _getBlankService () {
    return {
      type: 'service',
      description: '',
      quantity: 0,
      price: 0,
      id: this.incrementId(),
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
    this.setState({services: rows});
  }

  _updateStateFromService (data, id) {
    this.setState({services: this.state.services.map((service) => {
      if(service.id === id) {
        return {
          ...service,
          ...data,
        }
      }
      return service
    }
    )});
  }

  _sumTotal (services) {
    return services.reduce(function (a,b) {
      return a + (b.quantity * b.price)
    }, 0)
  }

  render(){
    console.log(this.state);
    return (
      <div>
        <table>
          <tr>
            <th>Type</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Amount</th>
          </tr>
          {this.state.services.map((service, index) => (
            <Service
              key={service.id}
              i={index}
              deleteRow={this._deleteServiceRow.bind(this)}
              updateServices={(data) => this._updateStateFromService(data, service.id)}
              service={service}/>
          ))}
        </table>
        <p>Total: ${this._sumTotal(this.state.services)}</p>
        <button onClick={() => this._addNewService()}>+ Add Row</button>
      </div>
    );
  }
}

class Service extends Component {

  constructor (props) {
    super(props);

    this.state = {
      ...props.service
    }
  }

  _handleChangeType (value, index) {
    this.setState({
      type: value,
    }, () => {
      this.props.updateServices(this.state, index);
    })
  }

  _handleChangeDescription (value, index) {
    this.setState({
      description: value,
    }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state);
      }
      this.props.updateServices(this.state, index);
    })
  }

  _handleChangeQuantity (value, index) {
    this.setState({
      quantity: value,
    }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state);
      }
      this.props.updateServices(this.state, index);
    })
  }

  _handleChangePrice (value, index) {
    this.setState({
      price: value,
    }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state);
      }
      this.props.updateServices(this.state, index);
    })
  }

  _multiply (x, y) {
    return x * y;
  }


  render () {
    return (
      <div>
        <tr>
          <td>
            <ServiceSelect onChange={value => this._handleChangeType(value, this.props.service.id)}/>
          </td>
          <td>
            <Input placeholder='Describe what you provided' type= 'text' onChange={value => this._handleChangeDescription(value, this.props.service.id)}/>
          </td>
          <td>
            <Input placeholder='#' type='number' onChange={value => this._handleChangeQuantity(value, this.props.service.id)}/>
          </td>
          <td>
            <Input placeholder='Price per item' type='number' onChange={value => this._handleChangePrice(value, this.props.service.id)}/>
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
