import React from 'react';

import './App.css';
import './styles.css';

import Input from './input/index';
import Textarea from './textarea/index';
import Checkbox from './checkbox/index';

export default class App extends React.Component {
  state = {
    anonym: false
  }

  handleChange = (value) => {
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
          onChange={this.handleChange}
        />
        <Input
          placeholder='ФИО'
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
      </div>
    );
  }
}
