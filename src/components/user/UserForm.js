import React, { Component } from 'react';

import { formSize } from '../form/FormConsts';
import FormGroup from '../form/FormGroup';
import Axios from 'axios';

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
        
        console.log("It will register with", this.state);

        let data = {
            username: this.state.username
        }

        Axios
            .post("http://localhost:8080/api/users", data)
            .then(res => {
                this.setState({
                    prompt: {
                        msg: "Inserted with id " + res.data.id,
                        err: false,
                    }
                })
            })
            .catch(err => {
                this.setState({
                    prompt: {
                        msg: "Error",
                        err: true,
                    }
                })
            })
        
        setTimeout(() => {
            this.setState({
                prompt: {
                    msg: null,
                    err: false,
                },
            })
        }, 2000);
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
 
export default UserForm;