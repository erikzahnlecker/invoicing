import React, { Component } from 'react';
import Input from '../Input';
import AddressBox from '../AddressBox';
import ServicesTable from '../ServicesTable';
import './styles.css';

export default class Invoices extends Component {

  constructor (props) {
    super(props);

    this.state = {
      to: {
        name: '',
        address: '',
      },
      from: {
        name: '',
        address: '',
      },
      for: null,
      date: null,
      invoice: null,
      due: null,
      services: [],
    }
  }

  render () {
    console.log('Rendering Invoices: ', this.state);
    return (
      <div>
      <div class='left'>
        <h2>Invoice is from:</h2>
        <AddressBox
          onChangeData={data => this.setState({ from: data })}
        />
        <h2>Invoice is to:</h2>
        <AddressBox
          onChangeData={data => this.setState({ to: data })}
        />
        </div>
        <div class='right'>
          <div class = 'description'>
            <Input
             style = {{width: 200, height:100}}
             headerText='For:'
             placeholder='Describe the services provided'
             onChange={value => this.setState({ for: value })}
            />
          </div>
          <div class='details'>
            <Input
             class="invoiceDate"
             style = {{width: 100, height:75}}
             headerText='Date'
             placeholder='Select Invoice Date'
             onChange={value => this.setState({ date: value })}
            />
            <Input
             class="invoiceNumber"
             style = {{width: 100, height:75}}
             headerText='Invoice #'
             placeholder='001'
             onChange={value => this.setState({ invoice: value })}
            />
            <Input
             class="due"
             style = {{width: 100, height:75}}
             headerText='Due'
             placeholder='In 30 Days'
             onChange={value => this.setState({ due: value })}
            />
          </div>
        </div>
        <ServicesTable
          onChange={services => this.setState({ services: services })}
        />
      </div>
    );
  }
}
