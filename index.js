import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'asdasd'
    };
  }

  render() {
    return (
      <div>
        <form>


        </form>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
