import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserCard from './UserCard';

import {
    fetch
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
        this.props.fetch();
    }

    render() { 
        let { list, loading, error } = this.props.users;
        
        
        let userList = list.length ? list.map((user, key) => 
            <UserCard key={key} user={user} />
        ) : "Niciun user present in baza de date...";

        return ( 
            <>
                {loading && "loading..."}
                {error   && "error..."}
                {loading && error && userList}
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
    fetch,
}
 
export default connect(mapStateToProps, mapDispatchToProps)(UserListRedux);