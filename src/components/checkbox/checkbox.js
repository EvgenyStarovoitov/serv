import React from 'react';
import Type from 'prop-types';

import cn from '../cn';

import Icon from '../icon/index.js';

@cn('checkbox')
export default class Checkbox extends React.Component {
  static propTypes = {
    text: Type.string,
    id: Type.string,
    name: Type.string,
    value: Type.string,
    checked: Type.bool,
    size: Type.oneOf(['s', 'm', 'l', 'xl']),
    onChange: Type.func
  }

  static defaultProps = {
    size: 'm',
    text: 'Выберите'
  }

  state = {
    checked: false
  }

  handleChange = () => {
    console.log(`checked: ${this.state.checked}`);
    const nextValue = !this.state.checked;

    this.setState({ checked: nextValue });

    if (this.props.onChange) {
      this.props.onChange(this.state.checked);
    }
  }

  render(cn) {
    const checkboxProps = {
      className: cn('inner'),
      id: this.props.id,
      name: this.props.name,
      size: this.props.size,
      type: 'checkbox',
      value: this.props.value,
      checked: this.state.checked,
      onChange: this.handleChange
    };

    return (
      <label
        className={cn()}
        htmlFor={this.props.id}
      >
        <Icon
          className={cn('icon')}
        />
        <input {...checkboxProps}/>
        <span
          className={cn('text')}
        >
          {this.props.text}
        </span>
      </label>
    );
  }
}
