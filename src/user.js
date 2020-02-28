import React from 'react';
import Username from './Username';
import Spinner from './Spinner'

const User = ({users,loading}) => {

    if(loading){
        return <Spinner/>
        
    }else{
        return (
            <div style={userStyle}>
                {users.map(user => ( <Username key={user.id} user={user}/>
                ))}
            </div>
        )
    }
}
const userStyle={
    display:'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap:'10px'
}

export default User
