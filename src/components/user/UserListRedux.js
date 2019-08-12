import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';

import {
     fetchUsersSuccess,
     fetchUsersLoading,
     fetchUsersFailure,
} from '../../store/actions/userActions';


class UserListRedux extends Component {
    constructor(props) {
        super(props);

        this.fetchUsers = this.fetchUsers.bind(this);
    }

    componentDidMount() {
        this.fetchUsers();
    }

    fetchUsers(){

        let { fetchUsersSuccess, fetchUsersLoading, fetchUsersFailure }  = this.props;

        fetchUsersLoading();

        Axios
            .get("http://localhost:8080/api/users")
            .then(res => fetchUsersSuccess(res.data))
            .catch(err => fetchUsersFailure(err))
    }

    render() { 
        let { list, loading, error } = this.props.users;
    

        return ( 
            <>
                {loading && "loading..."}
                {error   && "error..."}
                {list.map((a, k) => <li key={k}>{a.username}</li>)}
            </>
         );
    }
}

const mapStateToProps = state => {
    let { users } = state;

    return {
        users: users
    }
}

const mapDispatchToProps = {
    fetchUsersSuccess,
    fetchUsersLoading,
    fetchUsersFailure,
}
 
export default connect(mapStateToProps, mapDispatchToProps)(UserListRedux);