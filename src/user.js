import React, { Component } from 'react';
import Username from './Username'

export class User extends Component {
    state={
        user:[{
            login: "pjhyett",
            id: 3,
            avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
            html_url: "https://github.com/pjhyett",
          },
          {
            login: "wycats",
            id: 4,
            avatar_url: "https://avatars0.githubusercontent.com/u/4?v=4",
            html_url: "https://github.com/wycats",
           
          },
          {
            login: "ezmobius",
            id: 5,
            avatar_url: "https://avatars0.githubusercontent.com/u/5?v=4",
            html_url: "https://github.com/ezmobius",
            
          }]
    }
    render() {
        return (
            <div style={userStyle}>
                {this.state.user.map(user => ( <Username key={user.id} user={user}/>
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
