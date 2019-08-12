import React, { Component } from 'react';

const FormGroup = (props) => {

    const handleChange = (e) => {
        props.handleChange(e.target.value, e.target.name);  
    }

    return (  
        <div className={"form-group " + props.class}>
            <label className="sr-only">{props.labelText}</label>
            <input className="form-control" type={props.type} name={props.name} placeholder={props.placeholder } value={props.value} onChange={handleChange} />
        </div>
    );
}
 
export default FormGroup;