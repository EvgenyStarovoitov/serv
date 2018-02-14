import React from 'react';
import Type from 'prop-types';
import TextareaAutosize from 'react-textarea-autosize';

import cn from '../cn';

@cn('textarea')
export default class Textarea extends React.Component {
  static propTypes = {
    className: Type.string,
    width: Type.oneOf(['default', 'available']),
    resize: Type.oneOf(['both', 'horizontal', 'vertical', 'none']),
    autosize: Type.bool,
    name: Type.string,
    value: Type.string,
    defaultValue: Type.string,
    minRows: Type.number,
    maxRows: Type.number,
    maxLength: Type.number,
    maxHeight: Type.number,
    placeholder: Type.string,
    size: Type.oneOf(['s', 'm', 'l', 'xl']),
    onChange: Type.func,
    onHeightChange: Type.func
  };

  static defaultProps = {
    resize: 'none',
    autosize: true,
    size: 'm',
    minrows: 4,
    placeholder: 'Введите ваше сообщение'
  };

  state = {
    value: this.props.defaultValue || ''
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  }

  // handleHeightChange = (height) => {
  //   if (this.props.onHeightChange) {
  //     this.props.onHeightChange(height);
  //   }
  // }

  renderNativeTextarea = (prop) => {
    return (<textarea {...prop} />);
  }

  renderAutosizeTextarea = (prop) => {
    return (
      <TextareaAutosize
        {...prop}
        maxRows={this.props.maxRows}
        minRows={this.props.minRows}
        style={{ maxHeight: this.props.maxHeight }}
        // onHeightChange={this.handleHeightChange}
      />
    );
  }

  render(cn) {
    const textareaProps = {
      className: cn('inner'),
      width: this.props.width,
      name: this.props.name,
      maxLength: this.props.maxLength,
      placeholder: this.props.placeholder,
      size: this.props.size,
      onChange: this.handleChange
    };

    return (
      <div className={cn({
        resize: this.props.resize
      })}
      >
        {
          !this.props.autosize
            ? this.renderNativeTextarea(textareaProps)
            : this.renderAutosizeTextarea(textareaProps)
        }
      </div>
    );
  }
}
