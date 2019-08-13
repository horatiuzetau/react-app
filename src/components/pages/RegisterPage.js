import React from 'react';

// import UserForm from "../user/UserForm";
// import UserList from "../user/UserList";
import UserListRedux from "../user/UserListRedux";
import UserFormRedux from "../user/UserFormRedux";

const RegisterPage = (props) => {
    return ( 
        <>
            <UserFormRedux />
            <UserListRedux />
        </>
    );
}
 
export default RegisterPage;