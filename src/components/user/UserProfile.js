import React from 'react';

const UserProfile = (props) => {
    let {username} = props.match.params;

    // fac request sa aduc userul aici si ii construiesc profiul
    // un buton adauga masina o sa te duca pe o pagina de car-form cu tot cu username

    return ( 
        <h1>Profile {username}</h1>
     );
}
 
export default UserProfile;