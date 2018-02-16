import React from 'react';

import './App.css';
import './styles.css';

import Input from './input/index';
import Textarea from './textarea/index';
import Checkbox from './checkbox/index';
import Button from './button/index';
import Attach from './attach/index';

export default class App extends React.Component {
  state = {
    anonym: false
  }

  handleChange = (event) => {
    console.log(`value: ${event.target.value}`);
  }

  handleValue = (value) => {
    console.log(`value: ${value}`);
  }

  render() {
    return (
      <div className='App'>
        <h3>Ваше сообщение</h3>
        <Checkbox
          checked={false}
          id='anonym'
          text='Анонимное сообщение'
          onChange={this.handleValue}
        />
        <Input
          placeholder='ФИО'
          onChange={this.handleChange}
        />
        <Input
          placeholder='Телефон'
        />
        <Input
          placeholder='Email'
          type='email'
        />
        <Textarea
          minRows={6}
        />
        <Attach
          id='attach_button'
          text='Выберите файл'
        />
        <Button
          size='m'
          width='available'
          text='Отправить'
        />
      </div>
    );
  }
}
