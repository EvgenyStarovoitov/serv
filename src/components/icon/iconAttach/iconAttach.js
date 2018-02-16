import React from 'react';
import Icon from '../index';

import './iconAttach.css';

export default class IconAttach extends React.Component {
  static propTypes = Icon.propTypes;
  render() {
    return (
      <Icon
        {...this.props}
        name='iconattach'
        className={'attached'}
      />
    );
  }
}
