import React, { Component } from 'react';

import {formSize} from '../form/FormConsts';

import FormGroup from '../form/FormGroup';


const initState = {
    firma: '',
    prompt: {
        msg: null,
        err: false,
    },
}


class CarForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = initState;

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(value, name){
        this.setState({ 
            [name]: value
        });
    }

    handleSubmit(e){
        e.preventDefault();

        console.log("Inserting car");

    }

    render() { 
        return (   
            <form className="text-center border border-light p-5">
                {prompt.msg && <div className={prompt.err ? "alert alert-danger" : "alert alert-success"} >{prompt.msg}</div>}
                 <p className="h4 mb-4">Add car</p>
                 <div className="form-row align-items-center">
                    <FormGroup 
                        class={formSize.full}
                        type="text" 
                        value={this.state.username} 
                        labelText="Firma"
                        name="firma"
                        placeholder="Firma"
                        handleChange={this.handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-info btn-block my-4" onClick={this.handleSubmit}>Creaza cont</button>
            </form>
        );
    }
}
 
export default CarForm;