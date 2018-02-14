import React from 'react';
import Icon from '../index';

import './iconChecked.css';

export default class IconChecked extends React.Component {
  static propTypes = Icon.propTypes;
  render() {
    return (
      <Icon
        {...this.props}
        name='iconChecked'
        className='checked'
      />
    );
  }
}
