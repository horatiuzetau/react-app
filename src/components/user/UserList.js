import React, { Component } from 'react';
import Axios from 'axios';

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
    
        return ( 
            <>
                {loading && "loading..."}
                {error   && "error..."}
                {list.map((a, k) => <li key={k}>{a.username}</li>)}
            </>
         );
    }
}

export default UserList;
