import React from 'react';

import UserForm from "../user/UserForm";
import UserList from "../user/UserList";

const RegisterPage = (props) => {
    return ( 
        <>
            <UserForm />
            <UserList />
        </>
    );
}
 
export default RegisterPage;