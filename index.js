import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.css';
import {withFormik,Field,Form} from 'formik';
import * as Yup from 'yup';



const App=({
  values,
  handleChange,
  errors,
  touched,
  handleSubmit,
  isSubmitting,
})=>(
  <Form>
 < div className="form-group form-inline p-2">
<label className="text-white btn btn-secondary font-weight-bold col-4 ">Name : </label>
<Field 
type="text"
 name="author_type"
  id="author_type"
  className="form-control col-8"
 />
 <div className="p-0 m-0 mt-2 ">
{touched.author_type && errors.author_type && <h1 className="text-dark">{errors.author_type}</h1>}
 </div>
  </div>

  
<input type="submit" className="btn btn-primary" value="submit" />
  </Form>
)

const FormIkForm=withFormik({


  mapPropsToValues({}){
    return{
      author_type: '',

    }
  },
  validationSchema:
    Yup.object().shape({
      author_type:Yup.string().min(2,'Atlest 2 charachters ').max(5,'atmost 4 charachters').required('required'),
    }),
  
  handleSubmit(values){
    console.log(values);
  }
})(App)

render(<FormIkForm />, document.getElementById('root'));
