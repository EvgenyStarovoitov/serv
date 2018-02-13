import React from 'react';
import Type from 'prop-types';

import cn from '../cn';

@cn('input')
export default class Input extends React.Component {
  static propTypes = {
    type: Type.oneOf(['number', 'card', 'email', 'file', 'hidden', 'money', 'password', 'tel', 'text']),
    width: Type.oneOf(['default', 'available']),
    name: Type.string,
    value: Type.string,
    defaultValue: Type.string,
    maxLength: Type.number,
    placeholder: Type.string,
    size: Type.oneOf(['s', 'm', 'l', 'xl']),
    onChange: Type.func
  };

  static defaultProps = {
    formNoValidate: false,
    size: 'm',
    type: 'text'
  };

  state = {
    value: this.props.defaultValue || '',
    validate: true
  };

  handleChange = (event) => {
    this.changeValue(event);
  }

  changeValue(event) {
    this.setState({ value : event.target.value });
    if (this.props.onChange) {
      this.props.onChange(event);
    }
    console.log(`value: ${this.state.value}`);
  }

  render(cn) {
    const inputProps = {
      className: cn('inner'),
      type: this.props.type,
      maxLength: this.props.maxLength,
      name: this.props.name,
      placeholder: this.props.placeholder,
      onChange: this.handleChange
    };

    return (
      <div className={cn('box')}>
        <input {...inputProps}/>
      </div>
    );
  }
}
