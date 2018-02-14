import React from 'react';
import Icon from '../index';

import './iconUnchecked.css';

export default class IconUnchecked extends React.Component {
  static propTypes = Icon.propTypes;
  render() {
    return (
      <Icon
        {...this.props}
        name='iconUnchecked'
        className='unchecked'
      />
    );
  }
}
