import React from 'react';

import './App.css';
import './styles.css';

import Input from './input/index';
import Textarea from './textarea/index';

export default class App extends React.Component {
  state = {
  }

  render() {
    return (
      <div className='App'>
        <p>Ваше сообщение</p>
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
