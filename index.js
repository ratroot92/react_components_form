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
  <div class="form-group form-inline">
<label>Name : </label>
<input type="text" name="name" id="name" value={this.onChnage}
  </div>

        </form>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
