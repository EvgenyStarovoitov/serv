import React from 'react';
import Type from 'prop-types';

import cn from '../cn';

@cn('button')
export default class Button extends React.Component {
  static propTypes = {
    text: Type.string,
    name: Type.string,
    id: Type.string,
    className: Type.string,
    width: Type.oneOf(['default', 'available']),
    size: Type.oneOf(['s', 'm', 'l', 'xl']),
    onClick: Type.func
  }

  static defaultProps = {
    type: 'button',
    size: 'm',
    text: 'Кликни'
  }

  state = {

  }

  handleClick = (event) => {
    if (this.props.onClick) {
      this.props.onClick(event);
    }
  }

  render(cn) {
    const buttonProps = {
      text: this.props.text,
      name: this.props.name,
      id: this.props.id,
      onClick: this.handleClick,
      className: cn({
        width: this.props.width,
        size: this.props.size

      })
    };

    return (
      <button
        {...buttonProps}
      >
        {buttonProps.text}
      </button>
    );
  }
}
