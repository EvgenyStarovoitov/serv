// point for pass all components and containers

// import Input from './input/index';

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
 render(cn, TagButton) {
  let checked = this.props.checked !== undefined
      ? this.props.checked
      : this.state.checked;

  return (
      <label
          className={ cn({
              size: this.props.size,
              disabled: this.props.disabled,
              checked: checked || this.props.indeterminate,
              indeterminate: this.props.indeterminate,
              focused: this.state.focused,
              hovered: this.state.hovered,
              width: this.props.type === 'button' ? this.props.width : null
          }) }
          htmlFor={ this.props.id }
          onFocus={ this.handleFocus }
          onBlur={ this.handleBlur }
          onMouseEnter={ this.handleMouseEnter }
          onMouseLeave={ this.handleMouseLeave }
          ref={ (root) => { this.root = root; } }
      >
          {
              this.props.type === 'button'
                  ? this.renderButtonCheckbox(cn, checked, TagButton)
                  : this.renderNormalCheckbox(cn, checked)
          }
      </label>
  );
}

renderNormalCheckbox(cn, checked) {
  return [
      <span
          className={ cn('box') }
          key='box'
      >
          <input
              className={ cn('control') }
              type='checkbox'
              autoComplete='off'
              name={ this.props.name }
              id={ this.props.id }
              value={ this.props.value }
              checked={ checked }
              disabled={ this.props.disabled }
              onClick={ this.handleInputControlClick }
              onChange={ this.handleChange }
          />
          {
              checked &&
              <IconCheck
                  className={ cn('icon') }
                  size={ this.props.size === 'l' ? 'm' : 's' }
                  theme={ this.props.disabled ? 'alfa-on-white' : 'alfa-on-color' }
              />
          }
          {
              !checked && this.props.indeterminate &&
              <IconIndeterminate
                  className={ cn('icon') }
                  size={ this.props.size === 'l' ? 'm' : 's' }
                  theme={ this.props.disabled ? 'alfa-on-white' : 'alfa-on-color' }
              />
          }
      </span>,
      this.props.text &&
      <span
          className={ cn('text') }
          key='text'
          role='presentation'
      >
          { this.props.text }
      </span>
  ];
}

renderButtonCheckbox(cn, checked, TagButton) {
  return [
      <TagButton
          key='button'
          togglable='check'
          checked={ checked }
          title={ this.props.title }
          disabled={ this.props.disabled }
          size={ this.props.size || 'm' }
          width={ this.props.width }
          focused={ this.state.focused }
          hovered={ this.state.hovered }
          onClick={ this.handleChange }
      >
          { this.props.text ? this.props.text : '' }
      </TagButton>,
      <input
          className={ cn('control') }
          key='control'
          type='checkbox'
          tabIndex={ -1 }
          autoComplete='off'
          name={ this.props.name }
          id={ this.props.id }
          value={ this.props.value }
          checked={ checked }
          disabled={ this.props.disabled }
          onChange={ this.handleChange }
      />
  ];
}