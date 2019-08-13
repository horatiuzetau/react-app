import React from 'react';
import {connect } from 'react-redux';

import {Link } from 'react-router-dom';

import {
    dropByUsername,
} from '../../store/actions/userActions';

const UserCard = (props) => {
    const { username } = props.user;

    const handleDelete = () => {
        let { dropByUsername } = props;
        dropByUsername(username);
    }

    return ( 
        <div style={{marginTop:'5px'}} className="card">
            <div className="card-header">
                {username}
            </div>
            <div className="card-body">
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <button onClick={handleDelete} style={{marginRight: '5px'}} className="btn btn-danger">Delete</button>
                <button style={{marginRight: '5px'}} className="btn btn-secondary">Update</button>
                <Link to={"/users/".concat(username)} style={{marginRight: '5px'}} className="btn btn-primary">See profile</Link>
            </div>
        </div>
    );
}

const mapDispatchToProps = {
    dropByUsername,
}
 
export default connect(null, mapDispatchToProps)(UserCard);