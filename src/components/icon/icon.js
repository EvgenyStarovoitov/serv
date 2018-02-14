import React from 'react';
import Type from 'prop-types';

import cn from '../cn';

@cn('icon')
export default class Icon extends React.Component {
  static propTypes = {
    className: Type.string,
    id: Type.string,
    name: Type.string,
    size: Type.oneOf(['xs', 's', 'm', 'l', 'xl', 'xxl'])
  }

  static defaultProps = {
    size:'m'
  }


  render(cn) {
    return (
      <span
        className={cn({
          size: this.props.size
        })}
      />
    );
  }
}
