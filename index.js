import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.css';


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
  <div className="form-group form-inline p-2">
<label className="text-white btn btn-secondary font-weight-bold col-4 ">Name : </label>
<input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} className="form-control col-8"
 />
 <div className="p-0 m-0 mt-2 ">
 {this.state.err_name ? (<span className="alert alert-warning font-weight-bold  m-0 p-1">{this.state.err_name}</span>):null}
 </div>
  </div>



<input type="submit" className="btn btn-primary" value="submit" />
        </form>
        
      </div>




    );
  }
}

render(<App />, document.getElementById('root'));
