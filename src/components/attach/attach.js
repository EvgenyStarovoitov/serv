import React from 'react';
import Type from 'prop-types';

import cn from '../cn';

import IconAttach from '../icon/iconAttach/iconAttach';

@cn('attach')
export default class Attach extends React.Component {
  static propTypes = {
    text: Type.string,
    name: Type.string,
    id: Type.string,
    className: Type.string,
    width: Type.oneOf(['default', 'available']),
    size: Type.oneOf(['s', 'm', 'l', 'xl']),
    icon: Type.node,
    onClick: Type.func
  }

  static defaultProps = {
    type: 'button',
    size: 'm',
    text: 'Выбериет файл'
  }

  state = {

  }

  handleClick = (event) => {
    if (this.props.onClick) {
      this.props.onClick(event);
    }
  }

  render(cn) {
    const attachProps = {
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
      <span className={cn()}>
        <IconAttach />
        <button
          className={cn('button')}
        >
          <span className={cn('text')}>{this.props.text}</span>
        </button>
        <label
          className={cn('label')}
          htmlFor={this.props.id}
        >
          <input
            {...attachProps}
            type='file'
            className={cn('inner')}
            onChange={this.handleInputChange}
          />
        </label>
      </span>
    );
  }
}
