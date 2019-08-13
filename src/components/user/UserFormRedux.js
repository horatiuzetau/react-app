import React, { Component } from 'react';

import { formSize } from '../form/FormConsts';
import FormGroup from '../form/FormGroup';
import Axios from 'axios';

import { register } from '../../store/actions/userActions';
import { connect } from 'react-redux';


const initState = {
    username: '',
    password: '',
    prompt: {
        msg: null,
        err: false,
    },
}

class UserForm extends Component {

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
        
        
        let data = {...this.state, username: this.state.username.trim()};

        if(data.username !== ""){
            this.props.register(data)
                            .then(res => {
                                this.setState({...initState, prompt: {msg: "Inserted " + res.data.id, err: false}})
                            })
                            .catch(err => {
                                this.setState({...initState, prompt: {msg: "Error here...", err: true}})
                            });

        }
        
        // Resetam mesajul afisat. A fost doar un feedback la request pentru utilizator.
        setTimeout(() => {
            this.setState({
                prompt: {
                    msg: null,
                    err: false,
                },
            })
        }, 1500);
    }

    render() { 
        let { prompt } = this.state;
        
        return (  
            <form className="text-center border border-light p-5">
                {prompt.msg && <div className={prompt.err ? "alert alert-danger" : "alert alert-success"} >{prompt.msg}</div>}
                 <p className="h4 mb-4">Add user</p>
                 <div className="form-row align-items-center">
                    <FormGroup 
                        class={formSize.six}
                        type="text" 
                        value={this.state.username} 
                        labelText="Username"
                        name="username"
                        placeholder="Username"
                        handleChange={this.handleChange}
                    />
                    <FormGroup 
                        class={formSize.six}
                        type="password" 
                        value={this.state.password} 
                        labelText="Password"
                        name="password"
                        placeholder="Password"
                        handleChange={this.handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-info btn-block my-4" onClick={this.handleSubmit}>Creaza cont</button>
            </form>
        );
    }
}

const mapDispatchToProps = {
    register,
}
 
export default connect(null,mapDispatchToProps)(UserForm);