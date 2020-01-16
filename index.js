import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      err_name:'',


isvalid:true,


    };
  }
valdiationcheck=()=>{
  console.log("checking form validation ")
  let isvalid=false;
  if(this.state.name ===''){
    this.setState({
      err_name:'feild is required',
    });

    isvalid=false;
  }



  return isvalid;
}

handleSubmit=(event)=>{
  event.preventDefault();

  const isVerified=this.valdiationcheck();
  if(isVerified){
    console.log("isverfied_value =" +isVerified);
  }
  else{
  console.log(this.state);
  }

}
  handleChange=(event)=>{
    this.setState({
      [event.target.name]:event.target.name
    });
    console.log(event.target.name+" = "+event.target.value);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
  <div class="form-group form-inline">
<label>Name : </label>
<input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} className="form-control"
 />
 <div>
 {this.state.err_name ? (<span>{this.state.err_name}</span>):null}
 </div>
  </div>



<input type="submit" className="btn btn-primary" value="submit" />
        </form>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
