import React, { Component } from 'react';
import Axios from 'axios';
import UserCard from './UserCard';

const initState = {
    loading: false,
    error: null,
    list: [],
}

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = initState;

        this.fetchUsers = this.fetchUsers.bind(this);
    }

    componentDidMount() {
        this.fetchUsers();
    }

    fetchUsers(){

        this.setState({ loading: true });
        Axios
            .get("http://localhost:8080/api/users")
            .then(res => this.setState({ list: res.data, loading: false, error: null  }))
            .catch(err => this.setState({ list: [], loading: false, error: err  }))
    }

    render() { 
        let { list, loading, error } = this.state;

        // AICI fac ce vreau cu lista de useri

        let userList = list.length ? list.map((user, key) => 
            <UserCard key={key} user={user} />
        ) : "Nu exista niciun user in baza de date...";
    
        return ( 
            <>
                {loading && "loading..."}
                {error   && "error..."}
                {loading && error && userList}
            </>
         );
    }
}

export default UserList;
