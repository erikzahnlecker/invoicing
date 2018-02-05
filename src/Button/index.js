import React from 'react';
import './styles.css';

export default class Button extends React.Component {
  render () {
    return <button className='button'>{this.props.children}</button>
  }
}
